import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategory } from "../../redux/actions/categoryActions";
import { updatePlantnew } from "../../redux/actions/plantActions";
import Swal from "sweetalert2";

export const PlantModalEdit = ({ isOpen, onSubmit, onClose, editPlant }) => {
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
    if (editPlant) {
      setFormData({
        nama_indonesia: editPlant.nama_indonesia || "",
        deskripsi: editPlant.deskripsi || "",
        image_path: null,
        source: editPlant.source || "",
        nama_tumbuhan: editPlant.nama_tumbuhan || "",
        category_ids: editPlant.category_ids
          ? editPlant.category_ids.map((cat) => cat.id) // ambil ID saja
          : [],
      });

      if (editPlant.image_path) setPreview(editPlant.image_path);
    } else {
      setFormData({
        nama_indonesia: "",
        deskripsi: "",
        image_path: null,
        source: "",
        nama_tumbuhan: "",
        category_ids: [],
      });
      setPreview(null);
    }
  }, [editPlant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editPlant?.id) return;

    try {
      // kalau image_path null, pakai image_path lama dari editPlant
      const payload = {
        id: editPlant.id,
        ...formData,
        image_path: formData.image_path || editPlant.image_path,
      };

      await dispatch(updatePlantnew(payload));

      // panggil onSubmit untuk parent refresh
      onSubmit();

      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: `Tanaman ${formData.nama_tumbuhan || formData.nama_indonesia} berhasil diupdate ✅`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: error.response?.data?.error || error.message || "Gagal mengupdate tanaman ❌",
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
        <h2 className="text-xl font-bold mb-4">Edit Tumbuhan</h2>

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
            <label className="block mb-1 font-medium">Kategori Saat Ini</label>
            <p className="mb-2 text-gray-700">
              {formData.category_ids.length > 0
                ? categories
                    .filter((cat) => formData.category_ids.includes(cat.id))
                    .map((cat) => cat.categories)
                    .join(", ")
                : "Belum ada kategori"}
            </p>

            <label className="block mb-1 font-medium">Ubah Kategori</label>
            <select
              name="category_ids"
              value={String(formData.category_ids[0] || "")}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, category_ids: [Number(e.target.value)] }))
              }
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Pilih Kategori</option>
              {categories.map((cat) => (
                <option key={cat.id} value={String(cat.id)}>
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
                required={!editPlant}
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
              {editPlant ? "Update" : "Simpan"}
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
