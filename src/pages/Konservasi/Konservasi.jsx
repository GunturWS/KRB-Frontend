import React, { useState, useEffect, useMemo } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { FiSearch, FiFilter } from "react-icons/fi";
import { CardKonservasi } from "../../components/Konservasi Components/CardKonservasi";
import { DropDownKategori } from "../../components/Konservasi Components/DropDownKategori";
import { getAllPlants } from "../../redux/actions/plantActions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"; // ⬅️ tambahkan ini
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";

const itemsPerPage = 12;

const Konservasi = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [currentItems, setCurrentItems] = useState([]);
  const dispatch = useDispatch();
  const { plants } = useSelector((state) => state.plants);

  useEffect(() => {
    dispatch(getAllPlants());
  }, [dispatch]);

  // ⬇️ Filter data sebelum digunakan
  const filteredData = useMemo(() => {
    if (!Array.isArray(plants)) return [];

    return plants.filter((item) => {
      const query = searchQuery.toLowerCase();
      const matchSearch =
        item.nama_tumbuhan?.toLowerCase().includes(query) ||
        item.nama_indonesia?.toLowerCase().includes(query) ||
        item.deskripsi?.toLowerCase().includes(query);

      const matchCategory =
        selectedCategory === "" ||
        (Array.isArray(item.kategori) &&
          item.kategori.some((cat) => {
            // Cek jika cat adalah object dengan properti nama_kategori
            if (typeof cat === "object" && cat.nama_kategori) {
              return cat.nama_kategori === selectedCategory;
            }
            // Jika kategori berupa string (opsional)
            return cat === selectedCategory;
          }));

      return matchSearch && matchCategory;
    });
  }, [plants, searchQuery, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1); // Reset ke halaman pertama saat filter berubah
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    if (filteredData.length === 0) {
      setCurrentItems([]); // Kosongkan
      return;
    }

    const paginated = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    setCurrentItems(paginated);
  }, [filteredData, currentPage]);

  const pageNumbers = Array.from(
    { length: Math.ceil(filteredData.length / itemsPerPage) },
    (_, i) => i + 1
  );

  return (
    <>
      <Header />
      <div className="page-fade-in">
        <section className="relative mt-6 flex flex-col min-h-screen py-6 px-4 flex-grow">
          {/* Search & Filter Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 px-4">
            {/* Search Box */}
            <div className="relative w-full max-w-xl">
              {/* Background Glow */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-green-400 opacity-20 blur-lg"></div>

              <div className="relative z-10 flex items-center rounded-xl border border-gray-300 bg-white shadow-md transition focus-within:ring-2 focus-within:ring-green-400">
                <span className="px-4 text-gray-400">
                  <FiSearch className="text-2xl" />
                </span>
                <input
                  type="text"
                  placeholder="Cari tanaman konservasi..."
                  className="w-full py-3 pr-4 text-sm bg-transparent focus:outline-none focus:ring-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Kategori Dropdown */}
            <div className="w-full max-w-xl md:max-w-[180px]">
              <DropDownKategori
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>

          {/* Card List */}
          {currentItems.length > 0 ? (
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl w-full px-4">
              {currentItems.map((item, index) => (
                <CardKonservasi
                  key={index}
                  image_path={item.image_path}
                  nama_tumbuhan={item.nama_tumbuhan}
                  // nama_indonesia={item.nama_indonesia}
                  kategori={item.kategori}
                  href={`/detail-konservasi/${item.dataset_id}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center text-center text-gray-500 space-y-4 flex-grow relative min-h-[300px]">
              {/* Animasi Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FiSearch className="text-6xl text-blue-400" />
              </motion.div>

              {/* Animasi Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-lg"
              >
                Tidak ditemukan hasil untuk "<strong>{searchQuery}</strong>"
              </motion.p>

              {/* Glow Background */}
              <div className="absolute right-0 -z-10 h-[450px] w-[450px] rounded-full bg-blue-100 blur-[300px] opacity-70" />
            </div>
          )}

          {/* Pagination */}
          {filteredData.length > itemsPerPage && currentItems.length > 0 && (
            <div className="mt-8 flex justify-center gap-3">
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
                    currentPage === number
                      ? "scale-125 bg-blue-500 shadow-md shadow-blue-300"
                      : "bg-blue-200 hover:bg-blue-300 hover:scale-110"
                  }`}
                  aria-label={`Page ${number}`}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Footer - Always at the bottom */}
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Konservasi;
