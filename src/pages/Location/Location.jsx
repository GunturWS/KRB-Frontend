import React, { useRef } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import emailjs from "emailjs-com";
import { FaClock } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Location = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mo0z2zb", "template_u6165ln", form.current, "FMs5IQLKTEA6GoSpN").then(
      (result) => {
        alert("Pesan berhasil dikirim!");
        form.current.reset();
      },
      (error) => {
        alert("Gagal mengirim pesan. Coba lagi.");
        console.error(error);
      }
    );
  };
  return (
    <>
      <Header />
      {/* Lokasi Section */}
      <section className="relative overflow-x-hidden mx-auto mt-16 grid grid-cols-1 items-center gap-12 px-6 sm:container lg:grid-cols-2 lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center text-gray-800 lg:items-start lg:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Lokasi Kami
            </h1>
            <h2 className="text-lg font-medium text-gray-600">Balikpapan, Kalimantan Timur</h2>
          </div>
          <p className="text-base leading-relaxed text-gray-700 md:text-lg lg:max-w-xl">
            Kami berlokasi di{" "}
            <span className="font-semibold text-green-700">Kebun Raya Balikpapan</span>, tempat
            terbaik untuk pelestarian dan edukasi tentang tanaman konservasi.
          </p>
          <div className="flex items-center gap-3 text-gray-700">
            {/* <MapPin /> */}
            <span className="text-md font-medium">
              Jl. Soekarno Hatta KM 15, Balikpapan, Kalimantan Timur
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0333989057344!2d116.85543237496545!3d-1.1365309988525834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0xc8c509df2f71cdca!2sBalikpapan%20Botanical%20Gardens!5e0!3m2!1sen!2sid!4v1746040225418!5m2!1sen!2sid"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            className="w-full h-[450px] border-none"
          />
        </div>

        <div className="absolute -right-10 -z-10 h-[450px] w-[450px] rounded-full bg-green-100 blur-[500px]" />
      </section>

      {/* Jam Operasional */}
      <section className="mt-4 flex flex-col items-center w-full px-4 md:px-6 py-12 bg-white rounded-xl">
        <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md border border-green-100 rounded-3xl shadow-xl p-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-green-800 flex items-center justify-center gap-2">
              <FaClock className="text-green-600" size={28} />
              Jam Operasional
            </h3>
            <p className="text-gray-600 text-base mt-2">
              Kami buka setiap hari dari Senin sampai Minggu
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative flex items-center justify-between w-full border-t-2 border-green-200 pt-10 px-2 overflow-x-auto">
            {["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].map((hari, index) => (
              <div key={index} className="flex flex-col items-center relative min-w-[90px]">
                {/* Circle */}
                <div className="w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-md z-10"></div>

                {/* Text */}
                <div className="mt-3 text-center">
                  <p className="text-sm font-semibold text-green-800">{hari}</p>
                  <p className="text-xs text-gray-600">08.00 – 16.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="w-full  py-4 px-4">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-10 border border-green-100">
          <h2 className="text-4xl font-bold text-center text-green-800 tracking-tight">
            Hubungi Kami
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto">
            Ada pertanyaan, saran, atau kerja sama? Kirimkan pesan kamu melalui formulir ini, dan
            tim kami akan segera merespons!
          </p>

          <form
            ref={form}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Nama</label>
              <input
                type="text"
                name="name"
                placeholder="Nama lengkap"
                required
                className="w-full px-4 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-700 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-900 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@domain.com"
                required
                className="w-full px-4 py-2 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-700 shadow-sm"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-green-900 mb-1">Pesan</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tulis pesan kamu..."
                required
                className="w-full px-4 py-3 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 bg-white text-gray-700 shadow-sm resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </div>
          </form>

          <div className="pt-8 border-t border-green-100 text-center text-gray-600 text-sm space-y-3">
            <p className="flex justify-center items-center gap-2">
              <Phone size={16} className="text-green-600" />
              +62 812-3456-7890
            </p>
            <p className="flex justify-center items-center gap-2">
              <Mail size={16} className="text-green-600" />
              info@konservasi.id
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Location;
