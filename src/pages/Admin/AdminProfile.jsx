import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/AdminComponent/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getMe } from "../../redux/actions/authActions";
import { FaBars } from "react-icons/fa";

const AdminProfile = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profile = useSelector((state) => state.auth.user);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(getMe());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  const getInitial = () => {
    if (profile?.fullname) return profile.fullname.charAt(0).toUpperCase();
    if (profile?.username) return profile.username.charAt(0).toUpperCase();
    return "?";
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transition-transform transform bg-white md:relative md:translate-x-0 md:bg-transparent ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Overlay Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Content */}
      <div className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-[30px] shadow-[0_10px_60px_rgba(226,236,249,0.5)] space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <button className="text-gray-600 md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars className="text-2xl" />
          </button>
          <h1 className="text-2xl font-medium text-black font-poppins">
            Hi, {profile?.fullname || "Instruktur"} 👋
          </h1>
        </div>

        {/* Profile Card */}
        <div className="flex flex-col items-center py-6">
          <div className="w-full bg-white rounded-[20px] shadow-md p-8">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Avatar */}
              <div className="flex flex-col items-center md:w-1/3">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-md"
                  style={{ backgroundColor: "#16c098" }} // hijau aksen
                >
                  {getInitial()}
                </div>
                <p className="mt-4 text-lg font-semibold text-[#292d32]">{profile?.username}</p>
              </div>

              {/* Data Profil */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={profile?.fullname || ""}
                    disabled
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-[#292d32] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Username</label>
                  <input
                    type="text"
                    value={profile?.username || ""}
                    disabled
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-[#292d32] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
