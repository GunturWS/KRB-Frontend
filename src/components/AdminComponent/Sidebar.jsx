import React, { useState } from "react";
import { Home, Leaf, PlusCircle, LogOut, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { href: "/admin/dashboard", icon: <Home size={20} />, label: "Dashboard" },
  { href: "/admin/dashboard/plant", icon: <Leaf size={20} />, label: "Data Tanaman" },
  {
    href: "/admin/dashboard/add-category",
    icon: <PlusCircle size={20} />,
    label: "Data Kategori",
  },
];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsOpen(false);
  };

  const isExactMatch = (href) => href === "/admin/dashboard";

  return (
    <>
      {/* Overlay saat sidebar aktif di mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Tombol toggle sidebar (mobile) */}
      <button
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        className="fixed top-5 left-5 z-40 p-3 rounded-md bg-green-700 text-white shadow-lg hover:bg-green-600 transition md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar utama */}
      <aside
        className={`fixed top-0 left-0 w-64 bg-green-800 text-white p-6 flex flex-col min-h-screen z-40
                transform transition-transform duration-300
                ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 md:static md:block`}
      >
        {/* Brand */}
        <h1 className="text-3xl font-extrabold mb-10 tracking-wide select-none">Kebun Raya</h1>

        {/* Navigasi */}
        <nav className="flex flex-col space-y-3 flex-grow">
          {menuItems.map(({ href, icon, label }) => (
            <NavLink
              key={href}
              to={href}
              end={isExactMatch(href)}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-lg font-semibold transition-colors cursor-pointer select-none
                  ${isActive ? "bg-green-700 shadow-lg" : "hover:bg-green-700"}`
              }
            >
              <span className="text-green-300">{icon}</span>
              <span className="whitespace-nowrap">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Tombol logout dengan margin top untuk jarak */}
        <div className="mt-10">
          <button
            onClick={() => alert("Logout clicked")}
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 rounded-lg py-3 font-semibold w-full transition-colors select-none"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};
