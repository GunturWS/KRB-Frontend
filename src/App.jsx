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
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/dashboard/plant" element={<AdminPlant />} />
          <Route path="/admin/dashboard/add-plant" element={<AdminAddPlant />} />
          <Route path="/admin/dashboard/add-category" element={<AdminCategory/>} />
        </Routes>
      </Router>
      {/* <div>
        <Beranda />
      </div> */}
    </>
  );
}

export default App;
