  import React, { useRef, useState } from "react";
  import { Header } from "../../components/Header/Header";
  import { Footer } from "../../components/Footer/Footer";
  import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
  import emailjs from "emailjs-com";
  import { FaClock } from "react-icons/fa";
  import toast, { Toaster } from "react-hot-toast";
  import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";
  import { operationalDays } from "../../constants/operationalDays";

  const Location = () => {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();

      if (sent) {
        toast.error("Pesan sudah dikirim, tidak bisa mengirim ulang.");
        return;
      }

      if (loading) {
        // Jika sudah loading, jangan proses ulang
        return;
      }

      setLoading(true); // mulai loading

      emailjs.sendForm("service_mo0z2zb", "template_u6165ln", form.current, "FMs5IQLKTEA6GoSpN").then(
        () => {
          toast.success("Pesan berhasil dikirim!");
          form.current.reset();
          setSent(true);
          setLoading(false); // selesai loading
        },
        (error) => {
          toast.error("Gagal mengirim pesan. Coba lagi.");
          console.error(error);
          setLoading(false); // selesai loading meskipun gagal
        }
      );
    };

    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        {/* Lokasi Section */}
        <div className="page-fade-in">
          <section className="relative overflow-hidden mx-auto mt-24 px-4 sm:px-6 lg:px-12 max-w-screen-xl text-center">
            {/* Konten Teks */}
            <div className="flex flex-col items-center justify-center text-gray-800 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Temukan Kami di Balikpapan
              </h1>
              <h2 className="text-lg sm:text-xl font-medium text-gray-600 mb-6">
                Menjelajahi Keanekaragaman Hayati di Kalimantan Timur
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Kami berlokasi di{" "}
                <span className="font-semibold text-green-700">Kebun Raya Balikpapan</span>, pusat
                konservasi tanaman khas Kalimantan yang juga menjadi ruang edukasi, penelitian, dan
                rekreasi bagi masyarakat.
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 12.414a1 1 0 00-1.414 0L6.343 18.07M9 21h6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
                <span className="text-md sm:text-lg font-medium">
                  Jl. Soekarno Hatta KM 15, Balikpapan, Kalimantan Timur
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="mt-12 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0333989057344!2d116.85543237496545!3d-1.1365309988525834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149298f826ab5%3A0xc8c509df2f71cdca!2sBalikpapan%20Botanical%20Gardens!5e0!3m2!1sen!2sid!4v1746040225418!5m2!1sen!2sid"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                className="w-full h-[450px] border-none"
              ></iframe>
            </div>

            {/* Background Blur Efek */}
            <div className="absolute -bottom-20 -right-20 -z-10 h-[300px] w-[300px] rounded-full bg-green-100 blur-[200px]" />
          </section>

          {/* Jam Operasional */}
          <section className="mt-4 w-full px-4 md:px-6 py-12 bg-gradient-to-b from-green-50 to-white rounded-xl flex flex-col items-center">
            <div className="max-w-6xl w-full text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-green-800 flex justify-center items-center gap-3">
                <FaClock className="text-green-600" size={28} />
                Jam Operasional
              </h3>
              <p className="text-gray-600 text-base mt-2">
                Kami buka setiap hari dari Senin sampai Minggu
              </p>
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full max-w-5xl">
              {operationalDays.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md hover:shadow-xl transition duration-300 border border-green-100 rounded-lg p-4 flex flex-col items-center justify-center"
                >
                  <p className="text-green-700 font-semibold text-sm sm:text-base">{item.day}</p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">{item.time}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-green-100 space-y-12">
              {/* Header */}
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold text-green-800 relative inline-block">
                  Hubungi Kami
                  <span className="block w-16 h-1 bg-gradient-to-r from-green-600 to-emerald-300 mt-2 mx-auto rounded-full" />
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                  Ada pertanyaan, saran, atau kerja sama? Kirimkan pesan kamu melalui formulir ini dan
                  kami akan segera merespons!
                </p>
              </div>

              {/* Form */}
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Nama */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    required
                    disabled={sent}
                    className="peer w-full px-4 pt-5 pb-2 text-sm border border-green-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm disabled:opacity-50"
                  />
                <label className="absolute left-4 top-2 text-sm text-green-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-green-800">
                  Nama Lengkap
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  required
                  disabled={sent}
                  className="peer w-full px-4 pt-5 pb-2 text-sm border border-green-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm disabled:opacity-50"
                />
                <label className="absolute left-4 top-2 text-sm text-green-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-green-800">
                  Email Aktif
                </label>
              </div>

              {/* Pesan */}
              <div className="md:col-span-2 relative">
                <textarea
                  name="message"
                  rows={5}
                  placeholder=" "
                  required
                  disabled={sent}
                  className="peer w-full px-4 pt-5 pb-2 text-sm border border-green-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm resize-none disabled:opacity-50"
                />
                <label className="absolute left-4 top-2 text-sm text-green-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-green-800">
                  Tulis Pesan Kamu
                </label>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={sent || loading}
                  className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send size={18} />
                  {sent ? "Pesan Terkirim" : loading ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="pt-6 border-t border-green-100 text-center text-gray-600 text-sm space-y-2">
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
      </div>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default Location;
