import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import logoKebunRayaBalikpapan from "../../../public/images/kebunraya.jpg";
import pilarList from "../../constants/pilarList";
import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import { MemindaiPopUp } from "../../components/MemindaiComponent/MemindaiPopUp";

const Beranda = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Header />
      {/* <div className="bg-[#F5F7FA]"> */}
      <section className="m-auto mt-12 grid grid-rows-[max-content_max-content] items-center gap-12 px-4 sm:container md:items-center lg:grid-cols-[1.5fr_1fr] lg:grid-rows-none lg:px-12 2xl:grid-cols-[1fr_1fr]">
        <div className="flex flex-col items-center gap-6 text-center text-gray-800 lg:items-start lg:text-left">
          <div className="flex flex-col gap-1">
            <h3 className="text-sm lg:text-base text-gray-500">Destinasi Wisata Alam</h3>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-bold sm:text-3xl lg:text-5xl text-gray-900">
                KEBUN RAYA BALIKPAPAN
              </h1>
              <h2 className="text-lg font-normal opacity-80">Balikpapan, Kalimantan Timur</h2>
            </div>
          </div>
          <p className="text-sm md:text-base font-[Plus_Jakarta_Sans] lg:text-lg xs:w-10/12 sm:w-4/6 md:w-11/12 lg:w-5/6 2xl:w-10/12">
            Kebun Raya Balikpapan merupakan salah satu objek wisata unggulan di Kota Balikpapan.
            Pembangunannya merupakan hasil kerja sama antara Pemerintah Kota Balikpapan, Pusat
            Konservasi Tumbuhan Kebun Raya Bogor, dan Balai Besar Penelitian Dipterocarpaceae
            Kementerian Kehutanan.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Explore More
          </button>
        </div>

        <div className="relative">
          <picture>
            <img
              src={logoKebunRayaBalikpapan}
              className="h-full w-full object-contain rounded-lg shadow-md"
              alt="Logo Kebun Raya Balikpapan"
            />
          </picture>
        </div>
        <div className="absolute right-0 -z-10 h-[450px] w-[450px] rounded-full bg-blue-200 blur-[650px]" />
      </section>

      <section className="mt-20 flex flex-col items-center gap-6 w-full px-4 md:px-6 py-12 bg-white rounded-xl">
        <h1 className="max-w-screen-lg text-center text-black text-3xl sm:text-4xl font-semibold leading-snug sm:leading-tight">
          Ingin Melakukan Pengecekan Tumbuhan?
        </h1>
        <p className="max-w-screen-lg text-center text-gray-600 text-sm sm:text-base font-medium leading-relaxed mb-6">
          Cek tumbuhan di sekitar Anda dengan mudah! Temukan informasi menarik seputar tumbuhan dan
          alam melalui sistem yang kami tawarkan. Lakukan pemindaian tumbuhan dan lihat koleksi kami
          yang lengkap.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-screen-lg">
          <button
            onClick={() => setShowPopup(true)}
            className="w-full sm:w-1/2 h-14 sm:h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-black text-base md:text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            Memindai Tumbuhan
          </button>
          <Link
            to="/konservasi"
            className="w-full sm:w-1/2 h-14 sm:h-16 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center text-black text-base md:text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            Lihat Tumbuhan
          </Link>
        </div>
      </section>

      <section className="mt-0 w-full px-4 md:px-6 py-12 flex flex-col items-center bg-gradient-to-r  rounded-xl">
        <h2 className="max-w-screen-lg text-3xl sm:text-4xl font-bold text-center text-black font-poppins mb-10 sm:mb-14">
          -5 Pilar Kebun Raya-
        </h2>
        <div className="w-full max-w-screen-lg grid gap-8 sm:gap-10 md:grid-cols-2">
          {pilarList.map((pilar, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaLeaf className="text-green-600" size={22} />
                <h3 className="text-lg sm:text-xl font-semibold text-green-800 font-poppins">
                  {pilar.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 text-justify font-plusJakartaSans leading-relaxed">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tampilkan popup jika tombol diklik */}
      {showPopup && <MemindaiPopUp onClose={() => setShowPopup(false)} />}
      <Footer />

      {/* </div> */}
    </>
  );
};

export default Beranda;

{
  /* <section className="mt-20 flex flex-col items-center justify-center gap-8 bg-amber-200 py-12 px-4">
        <div className="flex max-w-2xl flex-col gap-5 py-6 text-center">
          <h1 className="text-xl font-bold md:text-3xl">Ingin Melakukan Pengecekan Tumbuhan?</h1>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-green-700">
              Memindai Tumbuhan
            </button>
            <button className="rounded-lg border border-green-600 px-6 py-3 text-base font-semibold text-green-600 transition hover:bg-green-100">
              Melihat Tumbuhan
            </button>
          </div>
        </div>
      </section> */
}
