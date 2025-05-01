import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";

import { dataTumbuhan } from "../../constants/dataTumbuhan";
import { Footer } from "../../components/Footer/Footer";
import { FiSearch, FiFilter } from "react-icons/fi"; // Import icon Search dari react-icons
import { motion } from "framer-motion"; // Pastikan import ini ada di paling atas (kalau belum)
import { CardKonservasi } from "../../components/Konservasi Components/CardKonservasi";
import { DropDownKategori } from "../../components/Konservasi Components/DropDownKategori";

const itemsPerPage = 9;

const Konservasi = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Update filteredData
  const filteredData = dataTumbuhan.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.latinName?.toLowerCase().includes(query) ||
      item.habitat?.toLowerCase().includes(query);

    const matchCategory = selectedCategory === "" || item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  // // Filter data berdasarkan banyak field
  // const filteredData = dataTumbuhan.filter((item) => {
  //   const query = searchQuery.toLowerCase();
  //   return (
  //     item.title.toLowerCase().includes(query) ||
  //     item.description?.toLowerCase().includes(query) ||
  //     item.latinName?.toLowerCase().includes(query) ||
  //     item.habitat?.toLowerCase().includes(query)
  //   );
  // });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = Array.from(
    { length: Math.ceil(filteredData.length / itemsPerPage) },
    (_, i) => i + 1
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <>
      <Header />

      <section className="relative mt-6 flex flex-col min-h-screen py-6 px-4 flex-grow">
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10 px-4">
          {/* Search Box */}
          <div className="relative w-full max-w-xl">
            {/* Background Glow */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-green-400 opacity-20 blur-lg"></div>

            <div className="relative z-10 flex items-center rounded-xl border border-gray-300 bg-white shadow-md transition focus-within:ring-2 focus-within:ring-blue-400">
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
          <DropDownKategori
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Card List */}
        {currentItems.length > 0 ? (
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl w-full px-4">
            {currentItems.map((program) => (
              <CardKonservasi key={program.href} {...program} />
            ))}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center text-center text-gray-500 space-y-4 flex-grow">
            {/* Animasi Icon */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
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

      {/* Footer - Always at the bottom */}
      <Footer />
    </>
  );
};

export default Konservasi;
