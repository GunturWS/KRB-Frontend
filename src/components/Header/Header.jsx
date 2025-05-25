import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import KebunRayaBalikpapanlogo from "../../../public/images/KebunRayaBalikpapanlogo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const setMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/konservasi", label: "Konservasi" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/lokasi-kontak", label: "Location & Contact" },
    // { to: "/faq-fasilitas", label: "FAQ & Fasilitas" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-brand-secondary-07/90 backdrop-blur-md shadow-sm">
      <div className="flex w-full items-center justify-between p-4 sm:container mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 lg:gap-4">
          <img src={KebunRayaBalikpapanlogo} alt="Logo" className="h-8 w-auto md:h-12" />
        </Link>

        {/* Menu Links */}
        <div
          className={`header__menu fixed inset-x-0 top-24 mx-auto w-[85%] origin-top rounded-3xl bg-gray-900 p-8 text-center transition-all duration-300 md:static md:inset-auto md:top-0 md:m-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-12 md:bg-transparent md:p-0 md:opacity-100 ${
            !menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#629f80] font-semibold border-b-2 border-emerald-500" // Warna aktif hijau emerald
                      : "text-white hover:text-emerald-400 md:text-gray-900 md:hover:text-emerald-600"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Toggle for Mobile */}
        <div
          className="header__toggle inline-flex cursor-pointer p-1 text-2xl md:hidden text-emerald-600 hover:text-emerald-400 transition-colors"
          onClick={setMenuHandler}
        >
          {menuOpen ? <RiMenuLine /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
};
