import React, { useEffect } from "react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "../../redux/actions/plantActions";
import { getAllCategory } from "../../redux/actions/categoryActions";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const plants = useSelector((state) => state.plants.plants); // pastikan sesuai dengan state di store
  const categories = useSelector((state) => state.categories.categories || []);
  const totalTumbuhan = plants.length;
  const totalCategory = categories.length;

  useEffect(() => {
    dispatch(getAllPlants());
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-50">
      {/* Sidebar */}
      <Sidebar />

      <main className="flex-1 p-8 bg-green-50 min-h-screen">
        {/* Header konten */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-green-800">Dashboard Admin</h2>
          <p className="text-sm text-gray-600 mt-1">
            Selamat datang di sistem informasi Kebun Raya Balikpapan.
          </p>
        </div>

        {/* Card Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-700">Total Tumbuhan</h3>
            <p className="text-2xl font-bold text-green-900">{totalTumbuhan}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-700">Kategori</h3>
            <p className="text-2xl font-bold text-green-900">{totalCategory}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-green-700">Admin Aktif</h3>
            <p className="text-2xl font-bold text-green-900">1</p>
          </div>
        </div>

        {/* Informasi tambahan */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-green-700 mb-4">Tentang Sistem</h3>
          <p className="text-gray-700 leading-relaxed">
            Sistem ini membantu mengelola data tumbuhan yang ada di Kebun Raya Balikpapan, termasuk
            menambahkan jenis tumbuhan baru, melihat detail informasi, serta memantau statistik
            jumlah tumbuhan.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
