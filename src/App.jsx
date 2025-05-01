import React from "react";
import "./App.css";
import Beranda from "./pages/Beranda/Beranda";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Konservasi from "./pages/Konservasi/Konservasi";
import TentangKami from "./pages/Tentang Kami/TentangKami";
import NotFound from "./pages/NotFound/NotFound";
import Location from "./pages/Location/Location";

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Beranda/>}/>
        <Route path="/konservasi" element={<Konservasi/>}/>
        <Route path="/tentang-kami" element={<TentangKami/>}/>
        <Route path="/lokasi" element={<Location/>}/>



        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
      {/* <div>
        <Beranda />
      </div> */}
    </>
  );
}

export default App;
