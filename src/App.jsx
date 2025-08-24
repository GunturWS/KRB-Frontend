import React from "react";
import "./App.css";
import Beranda from "./pages/Beranda/Beranda";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Konservasi from "./pages/Konservasi/Konservasi";
import TentangKami from "./pages/Tentang Kami/TentangKami";
import NotFound from "./pages/NotFound/NotFound";
import Location from "./pages/Location/Location";
import DetailKonservasi from "./pages/Konservasi/DetailKonservasi";
import FAQ from "./pages/FAQ/FAQ";
import { ScrollToTop } from "./components/ScrollToTop";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAddPlant from "./pages/Admin/AdminAddPlant";
import AdminPlant from "./pages/Admin/AdminPlant";
import AdminCategory from "./pages/Admin/AdminCategory";
import AdminRegiser from "./pages/Admin/AdminRegiser";
import AdminProfile from "./pages/Admin/AdminProfile";
import Protected from "./pages/security/Protected";
import NoAccessToken from "./pages/security/NoAccessToken";
import AdminRegister from "./pages/Admin/AdminRegiser";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/konservasi" element={<Konservasi />} />
          <Route path="/detail-konservasi/:id" element={<DetailKonservasi />} />

          <Route path="/tentang-kami" element={<TentangKami />} />

          <Route path="/lokasi-kontak" element={<Location />} />

          {/* <Route path="/faq-fasilitas" element={<FAQ />} /> */}

          <Route path="*" element={<NotFound />} />

          {/* Admin */}
          {/* Halaman Login/Register */}
          {/* <Route
            path="/admin/register"
            element={
              <NoAccessToken>
                <AdminRegister />
              </NoAccessToken>
            }
          /> */}
          <Route
            path="/admin/login"
            element={
              <NoAccessToken>
                <AdminLogin />
              </NoAccessToken>
            }
          />

          {/* Halaman Admin Dashboard */}
          <Route element={<Protected />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/dashboard/plant" element={<AdminPlant />} />
            <Route path="/admin/dashboard/add-plant" element={<AdminAddPlant />} />
            <Route path="/admin/dashboard/add-category" element={<AdminCategory />} />
            <Route path="/admin/dashboard/profile" element={<AdminProfile />} />
          </Route>
        </Routes>
      </Router>
      {/* toast container */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

export default App;
