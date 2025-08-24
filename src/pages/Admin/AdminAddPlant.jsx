import React, { useState } from "react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { UploadCloud } from "lucide-react";

const AdminAddPlant = () => {
  const [formData, setFormData] = useState({
    scientificName: "",
    indonesianName: "",
    category: "",
    image: null,
  });

  const [preview, setPreview] = useState(null);
  // const categories = ["Pohon", "Semak", "Liana", "Herba", "Tanaman Air"];

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setFormData((prev) => ({ ...prev, image: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Data tumbuhan berhasil disubmit!");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-50">
      {/* Sidebar */}

      <div className="w-64 text-white min-h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="flex-1 pt-10 pb-16 px-6 md:ml-64 flex justify-center items-start min-h-screen">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold text-green-900 mb-6 text-center">Tambah Data Tumbu</h1>
          <p className="text-center text-gray-600 mb-10">
            Silakan isi data tumbuhan yang akan ditambahkan ke database Kebun Raya Bogor.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Nama Ilmiah */}
            <div>
              <label htmlFor="scientificName" className="block mb-2 font-semibold text-gray-800">
                🌿 Nama Ilmiah
              </label>
              <input
                type="text"
                id="scientificName"
                name="scientificName"
                value={formData.scientificName}
                onChange={handleChange}
                placeholder="Contoh: Ficus benjamina"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
            </div>

            {/* Nama Indonesia */}
            <div>
              <label htmlFor="indonesianName" className="block mb-2 font-semibold text-gray-800">
                🍀 Nama Indonesia
              </label>
              <input
                type="text"
                id="indonesianName"
                name="indonesianName"
                value={formData.indonesianName}
                onChange={handleChange}
                placeholder="Contoh: Beringin"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              />
            </div>

            {/* Kategori */}
            <div>
              <label htmlFor="category" className="block mb-2 font-semibold text-gray-800">
                🗂️ Kategori Tumbuhan
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                required
              >
                <option value="" disabled>
                  -- Pilih Kategori --
                </option>
                {/* {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))} */}
              </select>
            </div>

            {/* Upload Gambar */}
            <div>
              <label htmlFor="image" className="block mb-2 font-semibold text-gray-800">
                📷 Gambar Tumbuhan
              </label>

              <label
                htmlFor="image"
                className="relative flex items-center justify-center w-full h-48 border-2 border-dashed border-green-400 rounded-lg cursor-pointer hover:border-green-500 transition overflow-hidden"
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
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                  required
                />
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition"
            >
              Simpan Tumbuhan
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AdminAddPlant;
