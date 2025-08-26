import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSeedling, FaThList, FaHome, FaSignOutAlt, FaBars, FaUserCircle } from "react-icons/fa";
import { adminLogout } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const menuData = [
  { href: "/admin/dashboard", icon: <FaHome />, label: "Dashboard" },
  { href: "/admin/dashboard/plant", icon: <FaSeedling />, label: "Data Tanaman" },
  { href: "/admin/dashboard/add-category", icon: <FaThList />, label: "Data Kategori" },
  { href: "/admin/dashboard/profile", icon: <FaUserCircle />, label: "Profile" },
];

export const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.auth.user);

  const [collapsed, setCollapsed] = useState(false); // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile open/close

const handleLogout = () => {
  Swal.fire({
    title: "Yakin mau keluar?",
    text: "Anda akan keluar dari akun admin.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, keluar",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(adminLogout(navigate));
      Swal.fire("Berhasil!", "Anda sudah logout.", "success");
    }
  });
};

  // auto close sidebar ketika pindah halaman (mobile)
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Tombol toggle hanya tampil di mobile & tablet */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#629f80] text-white rounded"
      >
        <FaBars />
      </button>

      {/* Overlay background */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-[0px_10px_60px_0px_rgba(226,236,249,0.5)] 
    flex flex-col justify-between transition-all duration-300 z-50
    ${collapsed ? "w-[80px]" : "w-[260px]"}
    ${mobileOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0`}
      >
        <div>
          {/* Logo & Toggle */}
          <div className="flex items-center justify-between mb-10 px-4 pt-6">
            {!collapsed && (
              <div className="flex items-center gap-3">
                <div className="w-[37px] h-[37px] bg-[#629f80] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  🌿
                </div>
                <div className="leading-tight">
                  <h1 className="text-[20px] font-semibold text-black font-poppins">Plant Admin</h1>
                  <span className="text-[10px] text-[#828282] font-poppins">v.01</span>
                </div>
              </div>
            )}
            {/* Tombol collapse hanya muncul di desktop (lg) */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hidden lg:block"
            >
              <FaBars />
            </button>
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-2 px-2">
            {menuData.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  to={item.href}
                  key={index}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all ${
                    isActive ? "bg-[#629f80] text-white" : "text-[#9197b3] hover:bg-gray-100"
                  }`}
                >
                  <div className="text-lg">{item.icon}</div>
                  {!collapsed && (
                    <span className="ml-4 font-poppins text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User info + logout */}
        <div className="mt-12 border-t pt-6 px-4">
          <div className="flex items-center gap-3 mb-4">
            <FaUserCircle className="text-4xl text-[#629f80]" />
            {!collapsed && (
              <div>
                <p className="text-black text-sm font-poppins">{profile?.fullname || "Admin"}</p>
                <p className="text-[#757575] text-xs font-poppins">
                  {profile?.username || "username"}
                </p>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-2 text-sm text-red-500 hover:bg-red-100 rounded transition w-full px-2 py-2 ${
              collapsed ? "justify-center" : "justify-start"
            }`}
          >
            <FaSignOutAlt />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};
