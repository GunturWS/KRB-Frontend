import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { categories } from "../../constants/categori";
import { FiFilter } from "react-icons/fi";

export const DropDownKategori = ({ selectedCategory, setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-[180px] text-sm z-[30]">
      {/* Background Glow */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-green-400 opacity-20 blur-lg"></div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full flex justify-between items-center rounded-xl border border-gray-300 bg-white py-2.5 px-4 shadow-md transition hover:ring-1 hover:ring-green-400"
      >
        <FiFilter className="text-lg" />
        {/* Memastikan teks kategori tidak mempengaruhi layout */}
        <span className="truncate">
          {categories.find((cat) => cat.value === selectedCategory)?.label ?? "Pilih Kategori"}
        </span>
        <FiChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 mt-2 w-full max-w-[180px] rounded-xl border border-gray-200 bg-white shadow-lg"
          >
            {categories.map((cat) => (
              <li
                key={cat.value + cat.label}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setIsOpen(false);
                }}
                className="cursor-pointer px-4 py-2 hover:bg-green-50 transition truncate"
                title={cat.label} // Tooltip saat hover
              >
                <span className="block truncate">{cat.label}</span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
