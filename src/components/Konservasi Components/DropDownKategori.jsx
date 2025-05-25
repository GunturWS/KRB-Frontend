import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryActions";

export const DropDownKategori = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories || []);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  // Label yang tampil di tombol dropdown
  const displayLabel = selectedCategory || "Semua Kategori";

  return (
    <div className="relative w-full md:max-w-[180px] text-sm z-[30]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full flex justify-between items-center rounded-xl border border-gray-300 bg-white py-2.5 px-4 shadow-md transition hover:ring-1 hover:ring-green-400"
      >
        {/* Container ikon kiri */}
        <div className="flex-shrink-0 mr-2 flex items-center justify-center w-6 h-6">
          <FiFilter className="text-lg" />
        </div>

        {/* Teks dengan truncate */}
        <span className="flex-grow truncate">{displayLabel}</span>

        {/* Ikon panah kanan */}
        <div className="flex-shrink-0 ml-2 flex items-center justify-center w-6 h-6">
          <FiChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 mt-2 w-full md:max-w-[180px] rounded-xl border border-gray-200 bg-white shadow-lg"
          >
            {/* Opsi Semua Kategori */}
            <li
              key="all"
              onClick={() => {
                setSelectedCategory("");
                setIsOpen(false);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-green-50 transition truncate"
              title="Semua Kategori"
            >
              Semua Kategori
            </li>

            {/* List kategori lain */}
            {categories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.nama_kategori);
                  setIsOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-green-50 transition truncate"
                title={cat.nama_kategori}
              >
                {cat.nama_kategori}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

