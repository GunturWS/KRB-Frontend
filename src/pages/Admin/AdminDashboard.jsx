import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlants, getAllPlantsNew } from "../../redux/actions/plantActions";
import { getAllCategory } from "../../redux/actions/categoryActions";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const status = "Active";

  const plantsTotal = useSelector((state) => state.plants.plants) || [];
  const plants = useSelector((state) => state.plants.plantsNew) || [];
  const categories = useSelector((state) => state.categories.categories) || [];

  const totalTumbuhan = plantsTotal.length;
  const totalCategory = categories.length;

  useEffect(() => {
    dispatch(getAllPlantsNew());
    dispatch(getAllPlants());
    dispatch(getAllCategory());
  }, [dispatch]);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredPlants = plants.filter((p) =>
    `${p.nama_tumbuhan} ${p.nama_indonesia} ${p.kategori}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlants.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <main className="flex-1 px-3 sm:px-4 md:px-6 lg:px-8 py-6">
        <div className="w-full max-w-6xl mx-auto bg-white rounded-[20px] shadow-[0_10px_60px_rgba(226,236,249,0.5)] p-4 sm:p-6 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-medium font-poppins text-black">
              Hello Admin 👋🏼
            </h1>
            <div className="relative w-full sm:w-[280px] md:w-[320px]">
              <input
                type="text"
                placeholder="Search plants..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-4 pr-10 rounded-xl border border-gray-200 shadow-sm text-sm font-poppins text-gray-700 placeholder:text-gray-400"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">🔍</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50">
              <div className="w-[64px] h-[64px] bg-gradient-to-b from-[#d3ffe7] to-[#effff6] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full opacity-60" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Tumbuhan</p>
                <span className="text-base md:text-lg text-gray-700">{totalTumbuhan}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 shadow-sm bg-gray-50">
              <div className="w-[64px] h-[64px] bg-gradient-to-b from-[#d3ffe7] to-[#effff6] rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded-full opacity-60" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Kategori</p>
                <span className="text-base md:text-lg text-gray-700">{totalCategory}</span>
              </div>
            </div>
          </div>

          {/* Plants Table */}
          <div>
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-semibold text-black">All Plants</h2>
              <p className="text-sm text-[#16c098]">Active Members</p>
            </div>

            {/* Desktop & Tablet Table */}
            <div className="hidden md:block overflow-x-auto">
              <div className="grid grid-cols-6 text-gray-400 text-sm font-medium border-b border-gray-200 pb-3 min-w-[800px]">
                {[
                  "Gambar",
                  "Nama Tumbuhan",
                  "Nama Indonesia",
                  "Kategori",
                  "Deskripsi",
                  "Status",
                ].map((heading) => (
                  <div
                    key={heading}
                    className={`px-4 ${heading === "Status" ? "text-center" : ""}`}
                  >
                    {heading}
                  </div>
                ))}
              </div>

              {currentItems.map((plant) => (
                <div
                  key={plant.id}
                  className="grid grid-cols-6 items-center text-sm text-[#292d32] py-4 border-b border-gray-100 min-w-[800px]"
                >
                  <div className="px-4">
                    <img
                      src={plant.image_path}
                      alt={plant.nama_tumbuhan}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div className="px-4">{plant.nama_tumbuhan}</div>
                  <div className="px-2">{plant.nama_indonesia}</div>
                  <div className="px-4">{plant.kategori}</div>
                  <div className="px-4 truncate">{plant.deskripsi}</div>
                  <div className="flex justify-center px-4">
                    <span
                      className={`px-3 py-1 rounded text-sm font-medium border ${
                        status === "Active"
                          ? "text-green-700 bg-green-100 border-green-300"
                          : "text-red-600 bg-red-100 border-red-300"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {currentItems.map((plant) => (
                <div
                  key={plant.id}
                  className="p-4 border rounded-xl shadow-sm space-y-2 bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={plant.image_path}
                      alt={plant.nama_tumbuhan}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{plant.nama_tumbuhan}</p>
                      <p className="text-sm text-gray-500">{plant.nama_indonesia}</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    <span className="font-semibold">Kategori:</span> {plant.kategori}
                  </p>
                  <p className="text-sm text-gray-600">{plant.deskripsi}</p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded text-sm font-medium border ${
                      status === "Active"
                        ? "text-green-700 bg-green-100 border-green-300"
                        : "text-red-600 bg-red-100 border-red-300"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4 text-sm text-gray-500">
              <div>
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredPlants.length)}{" "}
                of {filteredPlants.length} entries
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 rounded border text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button
                    key={n}
                    onClick={() => setCurrentPage(n)}
                    className={`px-3 py-1 rounded border ${
                      n === currentPage
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "text-gray-700 hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    {n}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 rounded border text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
