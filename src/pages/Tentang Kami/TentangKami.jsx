import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import krb from "../../../public/images/kebunraya.jpg";
import KRB2 from "../../../public/images/KRB2.jpg";
import latar from "../../../public/images/KRB.png";
import { Footer } from "../../components/Footer/Footer";
import { visiMisiKRB } from "../../constants/VisiMisi";
import { ScrollToTop } from "../../components/ScrollToTop/ScrollToTop";

const TentangKami = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />

      <div className="page-fade-in">
        <div className="relative w-full h-[245px] bg-[#629f80] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold font-poppins">Tentang Kami</h1>
          </div>
        </div>

        <div
          className={`mt-10 flex flex-col items-center gap-6 px-4 md:px-10 ${
            hasScrolled ? "scroll-slide-in" : ""
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black text-center leading-tight font-poppins">
            KEBUN RAYA BALIKPAPAN
          </h2>

          <div className="w-full max-w-[1060px] flex flex-col items-center gap-6">
            <p className="w-full text-sm md:text-base font-medium text-center text-gray-800 leading-relaxed font-plusJakarta">
              Setelah kurang lebih 11 tahun berdiri, Kebun Raya Balikpapan terus berperan penting
              sebagai pusat konservasi, edukasi, dan pelestarian keanekaragaman hayati di Kalimantan
              Timur.
            </p>

            <img
              src={latar}
              alt="Kebun Raya Balikpapan"
              className="w-full h-[200px] md:h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* latar belakang */}
        <div
          className={`mt-10 flex flex-col items-center gap-6 px-4 ${
            hasScrolled ? "scroll-slide-in" : ""
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black text-center leading-tight font-poppins">
            Latar Belakang Kebun Raya Balikpapan
          </h2>

          <div className="w-full max-w-[1060px] flex flex-col items-center gap-6">
            <p className="w-full text-sm md:text-base font-medium text-center text-gray-800 leading-relaxed font-plusJakarta">
              Kebun Raya Balikpapan dibangun untuk mendukung pelestarian keanekaragaman hayati
              Kalimantan serta menjadi pusat penelitian, pendidikan, dan wisata berbasis konservasi.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 gap-10 flex-col md:flex-row">
          <div className="w-full md:w-[618px] flex flex-col justify-start items-start gap-4 px-4 md:px-2">
            <h3 className="w-full text-black text-2xl md:text-2xl font-bold font-poppins leading-[38px] text-center md:text-left">
              Sejarah dan Lokasi Kebun Raya Balikpapan
            </h3>
            <p className="w-full text-justify text-[#1a202c] text-base md:text-md font-medium font-plusJakartaSans leading-relaxed">
              Kota Balikpapan memiliki luas wilayah sekitar 503,3 km² dan terbagi menjadi 6
              kecamatan. Sejak tahun 2006, direncanakan pembangunan Kebun Raya Balikpapan yang
              berlokasi di Kelurahan Karang Joang, Kecamatan Balikpapan Utara, tepatnya di Kawasan
              Hutan Lindung Sungai Wain (HLSW). Lokasi ini secara geografis berada pada koordinat BT
              116°51'0,55"–116°51'54,4" dan LS 01°07'49,2"–01°08'46,6". Kawasan ini ditetapkan
              sebagai Kawasan Hutan Dengan Tujuan Khusus (KDTK) berbentuk Kebun Raya seluas ±309 Ha
              berdasarkan SK Menteri Kehutanan No. 105/Menhut-II/2006 dan SK No. 68/Menhut-II/2009.
            </p>
          </div>
          <img
            className="w-[80%] md:w-[400px] h-[300px] md:h-[400px] object-cover rounded-lg"
            src={KRB2}
          />
        </div>

        <div className=" flex justify-center items-center mt-10 gap-10 flex-col-reverse md:flex-row">
          <img
            className="w-[80%] md:w-[400px] h-[300px] md:h-[400px] object-cover rounded-lg"
            src={krb}
          />

          <div className="w-full md:w-[618px] flex flex-col justify-start items-start gap-4 px-4 md:px-2">
            <h3 className="w-full text-black text-2xl md:text-2xl font-bold font-poppins leading-[38px] text-center md:text-left">
              Tujuan dan Pengelolaan Kebun Raya
            </h3>
            <p className="w-full text-justify text-[#1a202c] text-base md:text-md font-medium font-plusJakartaSans leading-relaxed">
              Pembangunan Kebun Raya Balikpapan dilatarbelakangi oleh kekhawatiran atas semakin
              cepatnya kerusakan hutan di Kalimantan Timur. Hal ini dapat menyebabkan punahnya
              jenis-jenis tumbuhan khas Kalimantan yang bernilai konservasi tinggi. Selain menjadi
              pusat konservasi, kebun raya ini juga diharapkan menjadi ruang terbuka hijau untuk
              kegiatan pendidikan, penelitian, rekreasi, serta pemberdayaan masyarakat. Harapannya,
              masyarakat sekitar dapat turut berperan dalam perlindungan kawasan HLSW. Sejak tahun
              2015, pengelolaan kebun raya ini dilaksanakan oleh UPTD Kebun Raya Balikpapan yang
              berada di bawah Dinas Lingkungan Hidup Kota Balikpapan. Hingga kini, pembangunan
              koleksi tanaman dan infrastruktur masih terus dilakukan untuk menunjang fungsinya
              sebagai kebun raya modern.
            </p>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="w-full bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              Visi & Misi KRB
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {visiMisiKRB.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-t-4 p-6 md:p-8 shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out"
                  style={{ borderColor: item.borderColor }}
                >
                  <h3
                    className="text-xl md:text-2xl font-semibold text-center mb-4"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ScrollToTop/>
    </>
  );
};

export default TentangKami;
