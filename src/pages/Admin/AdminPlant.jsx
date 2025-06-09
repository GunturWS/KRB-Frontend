import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { plantsData as initialData } from "../../constants/palntdata";
import { PlantModal } from "../../components/AdminComponent/plantModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "../../redux/actions/plantActions";

const AdminPlant = () => {
  const dispatch = useDispatch();
  const { plants } = useSelector((state) => state.plants);

  console.log(plants);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [plant, setPlant] = useState(initialData);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const totalPages = Math.ceil(plants.length / itemsPerPage);
  const currentData = plants.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const goPrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  useEffect(() => {
    dispatch(getAllPlants());
  }, [dispatch]);

  const handleAddOrUpdate = (plant) => {
    const plantWithImage = {
      ...plant,
      image: plant.image ? URL.createObjectURL(plant.image) : null,
      id: plant.id || Date.now(),
    };

    if (plant.id) {
      setPlant((prev) => prev.map((p) => (p.id === plant.id ? plantWithImage : p)));
    } else {
      setPlant((prev) => [plantWithImage, ...prev]);
    }

    setSelectedPlant(null);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setPlant((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-100 to-green-50">
      <Sidebar />
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-wide">
            Daftar Tumbuhan di KRB
          </h1>
          <button
            onClick={() => {
              setSelectedPlant(null);
              setShowModal(true);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            + Tambah Tumbuhan
          </button>
        </div>

        <PlantModal
          isOpen={showModal}
          onSubmit={handleAddOrUpdate}
          onClose={() => {
            setShowModal(false);
            setSelectedPlant(null);
          }}
          selectedPlant={selectedPlant}
        />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {currentData.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-xl shadow-md max-w-[320px] mx-auto flex flex-col min-h-[420px]"
            >
              <div className="relative rounded-t-xl overflow-hidden h-52">
                <img
                  src={plant.image_path}
                  alt={plant.nama_indonesia}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-5">
                  <h2 className="text-white text-lg font-semibold tracking-wide truncate">
                    {plant.nama_tumbuhan}
                  </h2>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-gray-900 font-semibold text-xl italic mb-2 truncate">
                  {plant.nama_indonesia}
                </h3>
                <p className="text-green-600 font-medium text-md mb-3 truncate">
                  Kategori: <span className="font-normal">{plant.kategori}</span>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3 truncate">
                  {plant.deskripsi}
                </p>

                <div className="flex justify-between mt-auto">
                  <button
                    onClick={() => {
                      setSelectedPlant(plant);
                      setShowModal(true);
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 text-sm rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(plant.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-6">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md font-semibold border ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Prev
          </button>

          <span className="flex items-center text-gray-700 font-semibold">
            Halaman {currentPage} dari {totalPages}
          </span>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md font-semibold border ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default AdminPlant;
