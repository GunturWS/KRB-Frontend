import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { PlantModal } from "../../components/AdminComponent/plantModal";
import { PlantModalEdit } from "../../components/AdminComponent/plantModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { deletePlant, getAllPlantsNew } from "../../redux/actions/plantActions";
import { getAllCategory } from "../../redux/actions/categoryActions";
import Swal from "sweetalert2";

const AdminPlant = () => {
  const dispatch = useDispatch();
  const { plants } = useSelector((state) => state.plants);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [editPlant, setEditPlant] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredPlants = plants.filter((plant) => {
    const namaTumbuhan = (plant.nama_tumbuhan || plant.dataset_name || "").toLowerCase();
    return namaTumbuhan.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlants.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    dispatch(getAllPlantsNew());
    dispatch(getAllCategory());
  }, [dispatch]);

const handleDelete = (id) => {
  Swal.fire({
    title: "Yakin ingin menghapus tanaman ini?",
    text: "Data yang dihapus tidak bisa dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(deletePlant(id));

      Swal.fire({
        icon: "success",
        title: "Terhapus!",
        text: "Tanaman berhasil dihapus ✅",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-[20px] shadow-[0_10px_60px_rgba(226,236,249,0.5)] space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl sm:text-2xl font-medium font-poppins text-black">
            Daftar Tumbuhan 🌿
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Cari tumbuhan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-[220px] h-10 pl-4 pr-10 rounded-xl border border-gray-200 shadow-sm text-sm font-poppins text-gray-700 placeholder:text-gray-400"
            />
            <button
              onClick={() => {
                setSelectedPlant(null);
                setShowModal(true);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium font-poppins"
            >
              + Tambah Tumbuhan
            </button>
          </div>
        </div>

        {/* Modal */}
        <PlantModal
          isOpen={showModal}
          onSubmit={() => setShowModal(false)}
          onClose={() => {
            setSelectedPlant(null);
            setShowModal(false);
          }}
          selectedPlant={selectedPlant}
        />

        <PlantModalEdit
          isOpen={showEditModal}
          editPlant={editPlant}
          onClose={() => {
            setEditPlant(null);
            setShowEditModal(false);
          }}
          onSubmit={async () => {
            setShowEditModal(false);
            setEditPlant(null);
            // reload plants
            await dispatch(getAllPlantsNew());
          }}
        />

        {/* Info */}
        <p className="text-sm text-[#16c098]">{filteredPlants.length} Tumbuhan ditemukan</p>

        {/* Table (desktop) */}
        <div className="hidden md:grid grid-cols-6 text-gray-400 text-sm font-medium border-b border-gray-200 pb-3">
          <div>Gambar</div>
          <div>Nama Tumbuhan</div>
          <div>Nama Indonesia</div>
          <div>Kategori</div>
          <div>Deskripsi</div>
          <div className="text-center">Aksi</div>
        </div>

        {/* Data rows */}
        <div className="space-y-4">
          {currentItems.map((plant) => {
            const namaTumbuhan = (plant.nama_tumbuhan || plant.dataset_name || "").toLowerCase();
            const kategori = plant.kategori || plant.categories;

            return (
              <div
                key={plant.id}
                className="p-4 border border-gray-100 rounded-lg shadow-sm md:shadow-none md:border-0 md:grid md:grid-cols-6 md:gap-4 md:items-center md:py-4 md:border-b"
              >
                {/* Mobile → Card layout */}
                <div className="flex items-center gap-3 md:block">
                  <img
                    src={plant.image_path}
                    alt={namaTumbuhan}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex flex-col md:hidden">
                    <span className="font-semibold text-sm">{namaTumbuhan}</span>
                    <span className="text-xs italic text-gray-600">{plant.nama_indonesia}</span>
                    <span className="mt-1 inline-block px-2 py-0.5 text-xs bg-green-100 text-green-700 border border-green-300 rounded">
                      {kategori}
                    </span>
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:block font-semibold truncate max-w-[170px]">
                  {namaTumbuhan}
                </div>
                <div className="hidden md:block italic truncate max-w-[170px]">
                  {plant.nama_indonesia}
                </div>
                <div className="hidden md:block w-[120px]">
                  <span className="truncate inline-block whitespace-nowrap px-2 py-1 rounded text-xs bg-green-100 text-green-700 border border-green-300 text-center">
                    {kategori}
                  </span>
                </div>
                <div className="hidden md:block truncate max-w-[170px]">{plant.deskripsi}</div>

                {/* Actions */}
                <div className="mt-3 flex gap-2 justify-end md:mt-0 md:justify-center">
                  <button
                    onClick={() => {
                      setEditPlant(plant);
                      setShowEditModal(true);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 text-xs rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(plant.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-xs rounded"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-500">
          <div>
            Menampilkan data {filteredPlants.length > 0 ? indexOfFirstItem + 1 : 0} sampai{" "}
            {Math.min(indexOfLastItem, filteredPlants.length)} dari {filteredPlants.length} tumbuhan
          </div>
          <div className="flex items-center gap-1 flex-wrap">
            <button
              className="px-2 py-1 rounded border text-gray-600 hover:bg-gray-100"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                className={`px-3 py-1 rounded border ${
                  currentPage === pageNum
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "text-gray-700 hover:bg-gray-100 border-gray-300"
                }`}
                onClick={() => handlePageChange(pageNum)}
              >
                {pageNum}
              </button>
            ))}
            <button
              className="px-2 py-1 rounded border text-gray-600 hover:bg-gray-100"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPlant;
