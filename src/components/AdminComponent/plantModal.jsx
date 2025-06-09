import React, { useState, useEffect } from "react";
import { UploadCloud } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addPlant, updatePlant } from "../../redux/actions/plantActions";
import { getAllCategory } from "../../redux/actions/categoryActions";

export const PlantModal = ({ isOpen, onSubmit, onClose, selectedPlant }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nama_indonesia: "",
    nama_tumbuhan: "",
    nama_kategori: "",
    deskripsi: "",
    image_path: null,
  });

  const categories = useSelector((state) => state.categories.categories || []);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    if (selectedPlant) {
      setFormData({
        ...selectedPlant,
        image_path: null,
      });
      setPreview(selectedPlant.image_path || null);
    } else {
      setFormData({
        nama_indonesia: "",
        nama_tumbuhan: "",
        nama_kategori: "",
        deskripsi: "",
        image_path: null,
      });
      setPreview(null);
    }
  }, [isOpen, selectedPlant]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image_path" && files.length > 0) {
      setFormData((prev) => ({ ...prev, image_path: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nama_indonesia", formData.nama_indonesia);
    data.append("nama_tumbuhan", formData.nama_tumbuhan);
    data.append("nama_kategori", formData.nama_kategori);
    data.append("deskripsi", formData.deskripsi);
    if (formData.image_path) {
      data.append("image", formData.image_path); // <- pastikan backend minta "image"
    }

    if (selectedPlant) {
      dispatch(updatePlant(selectedPlant.id, data));
    } else {
      dispatch(addPlant(data));
    }

    onClose();
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4 md:px-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6 md:p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-800 text-center mb-4">
          {selectedPlant ? "Edit Tumbuhan" : "Tambah Tumbuhan"}
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
          {selectedPlant
            ? "Ubah data tumbuhan yang ada di database"
            : "Lengkapi formulir berikut untuk menambahkan tumbuhan baru"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nama Ilmiah */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">🌿 Nama Ilmiah</label>
            <input
              type="text"
              name="nama_tumbuhan"
              value={formData.nama_tumbuhan}
              onChange={handleChange}
              placeholder="Contoh: Ficus benjamina"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Nama Indonesia */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">🍀 Nama Indonesia</label>
            <input
              type="text"
              name="nama_indonesia"
              value={formData.nama_indonesia}
              onChange={handleChange}
              placeholder="Contoh: Beringin"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">🗂️ Kategori Tumbuhan</label>
            <select
              name="nama_kategori"
              value={formData.nama_kategori}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled>
                -- Pilih Kategori --
              </option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nama_kategori}
                </option>
              ))}
            </select>
          </div>

          {/* Gambar */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">📷 Gambar Tumbuhan</label>
            <label
              htmlFor="image"
              className="relative flex items-center justify-center w-full h-48 border-2 border-dashed border-green-400 rounded-lg cursor-pointer hover:border-green-500 overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <UploadCloud className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm text-gray-600">Klik untuk unggah gambar</span>
                </div>
              )}
              <input
                type="file"
                name="image_path"
                id="image"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Deskripsi */}
          <div>
            <label className="block mb-1 font-medium text-gray-800">📝 Deskripsi</label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleChange}
              placeholder="Deskripsi tumbuhan..."
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Aksi */}
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              {selectedPlant ? "Update Tumbuhan" : "Simpan Tumbuhan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
