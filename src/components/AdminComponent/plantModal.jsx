import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlantNew } from "../../redux/actions/plantActions";
import { getAllCategory } from "../../redux/actions/categoryActions";
import Swal from "sweetalert2";

export const PlantModal = ({ isOpen, onSubmit, onClose, selectedPlant }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nama_indonesia: "",
    deskripsi: "",
    image_path: null, // file object
    source: "",
    nama_tumbuhan: "",
    category_ids: "",
  });
  const [preview, setPreview] = useState(null); // tambahkan di atas
  const categories = useSelector((state) => state.categories.categories || []);

  useEffect(() => {
    if (isOpen) {
      dispatch(getAllCategory());
    }
  }, [isOpen, dispatch]);

  useEffect(() => {
    if (selectedPlant) {
      setFormData({
        nama_indonesia: selectedPlant.nama_indonesia || "",
        deskripsi: selectedPlant.deskripsi || "",
        image_path: null,
        source: selectedPlant.source || "",
        nama_tumbuhan: selectedPlant.nama_tumbuhan || "",
        category_ids: selectedPlant.category_ids?.[0] || "",
      });

      // set preview dari URL gambar yang sudah ada
      if (selectedPlant.image_path) {
        setPreview(selectedPlant.image_path);
      }
    } else {
      setFormData({
        nama_indonesia: "",
        deskripsi: "",
        image_path: null,
        source: "",
        nama_tumbuhan: "",
        category_ids: "",
      });
      setPreview(null);
    }
  }, [selectedPlant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // dispatch tambah tanaman
      await dispatch(addPlantNew(formData));

      // panggil onSubmit agar parent refresh list
      onSubmit();

      // tampilkan success alert
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: `Tanaman ${
          formData.nama_tumbuhan || formData.nama_indonesia
        } berhasil ditambahkan ✅`,
        timer: 1500,
        showConfirmButton: false,
      });

      // reset form
      setFormData({
        nama_indonesia: "",
        deskripsi: "",
        image_path: null,
        source: "",
        nama_tumbuhan: "",
        category_ids: "",
      });
      setPreview(null);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: error.response?.data?.error || error.message || "Gagal menambahkan tanaman ❌",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 h-screen px-4">
      {/* Wrapper untuk modal dengan scroll */}
      <div
        className="bg-white p-6 rounded-xl w-full max-w-2xl md:max-w-xl sm:max-w-lg shadow-lg relative 
                  max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-xl font-bold mb-4">Tambah Tanaman</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nama Ilmiah</label>
            <input
              type="text"
              name="nama_tumbuhan"
              placeholder="Nama Tumbuhan"
              value={formData.nama_tumbuhan}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Nama Indonesia</label>
            <input
              type="text"
              name="nama_indonesia"
              placeholder="Nama Indonesia"
              value={formData.nama_indonesia}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Sumber</label>
            <input
              type="text"
              name="source"
              placeholder="Sumber"
              value={formData.source}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">ID Kategori</label>
            <select
              name="category_ids"
              value={formData.category_ids}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            >
              <option value="">Pilih Kategori</option>
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nama_kategori}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Gambar</label>
            <div className="relative flex items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer overflow-hidden group">
              <input
                type="file"
                name="image_path"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData((prev) => ({ ...prev, image_path: file }));
                    setPreview(URL.createObjectURL(file));
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                required={!selectedPlant}
              />

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <p className="text-sm">Klik untuk upload gambar</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Deskripsi</label>
            <textarea
              name="deskripsi"
              placeholder="Deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
            >
              {selectedPlant ? "Update" : "Simpan"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
