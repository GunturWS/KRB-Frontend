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
        </Routes>
      </Router>
      {/* <div>
        <Beranda />
      </div> */}
    </>
  );
}

export default App;
