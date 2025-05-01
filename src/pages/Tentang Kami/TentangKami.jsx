// import React from "react";
// import { Header } from "../../components/Header/Header";
// import krb from "../../../public/images/pianis.png";
// import latar from "../../../public/images/KRB.png";
// import { Footer } from "../../components/Footer/Footer";
// import { visiMisiKRB } from "../../constants/VisiMisi";

// const TentangKami = () => {
//   return (
//     <>
//       <Header />

//       <div>
//         <div className="relative w-full h-[245px] bg-green-900 overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-white text-3xl md:text-5xl font-bold font-poppins">Tentang Kami</h1>
//           </div>
//         </div>

//         <div className="mt-20 flex flex-col items-center gap-6 px-4">
//           <h2 className="text-2xl md:text-4xl font-bold text-black text-center leading-tight font-poppins">
//             KEBUN RAYA BALIKPAPAN
//           </h2>

//           <div className="w-full max-w-[1060px] flex flex-col items-center gap-6">
//             <p className="w-full text-sm md:text-base font-medium text-center text-gray-800 leading-relaxed font-plusJakarta">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//               exercitation. This is simply dummy text of the printing and typesetting industry.
//             </p>

//             <img
//               src={latar}
//               alt="Kebun Raya Balikpapan"
//               className="w-full h-[200px] md:h-[300px] object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* latar belakang */}
//         <div className="mt-20 flex flex-col items-center gap-6 px-4">
//           <h2 className="text-2xl md:text-4xl font-bold text-black text-center leading-tight font-poppins">
//             Latar Belakang Kebun Raya Balikpapan
//           </h2>

//           <div className="w-full max-w-[1060px] flex flex-col items-center gap-6">
//             <p className="w-full text-sm md:text-base font-medium text-center text-gray-800 leading-relaxed font-plusJakarta">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua.
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-10 gap-10 flex-col md:flex-row">
//           <div className="w-full md:w-[618px] flex flex-col justify-start items-start gap-4 px-4">
//             <div className="w-full text-black text-2xl md:text-3xl font-semibold font-poppins leading-[38px] text-center md:text-left">
//               Sejarah Kebun Raya Balikpapan
//             </div>
//             <div className="w-full text-justify text-[#1a202c] text-base md:text-lg font-medium font-plusJakartaSans leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//               exercitation. This is simply dummy text of the printing and typesetting industry.
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
//               unknown printer took a galley of type and scrambled it to make a type specimen book.
//               It has survived not only five centuries, but also the leap into electronic
//               typesetting, remaining essentially unchanged.
//             </div>
//           </div>
//           <img className="w-[80%] md:w-[400px] h-[300px] md:h-[400px] object-cover" src={krb} />
//         </div>

//         <div className=" flex justify-center items-center mt-10 gap-10 flex-col-reverse md:flex-row">
//           <img className="w-[80%] md:w-[400px] h-[300px] md:h-[400px] object-cover" src={krb} />

//           <div className="w-full md:w-[618px] flex flex-col justify-start items-start gap-4 px-4">
//             <div className="w-full text-black text-2xl md:text-3xl font-semibold font-poppins leading-[38px] text-center md:text-left">
//               Sejarah Kebun Raya Balikpapan 2
//             </div>
//             <div className="w-full text-justify text-[#1a202c] text-base md:text-lg font-medium font-plusJakartaSans leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//               exercitation. This is simply dummy text of the printing and typesetting industry.
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
//               unknown printer took a galley of type and scrambled it to make a type specimen book.
//               It has survived not only five centuries, but also the leap into electronic
//               typesetting, remaining essentially unchanged.
//             </div>
//           </div>
//         </div>

//         {/* visi misi */}
//         <div className="mt-20 relative w-full max-w-screen-xl mx-auto px-6">
//           {/* Kontainer utama */}
//           <div className="relative w-full flex justify-center items-center py-12 px-8">
//             <div className="flex w-full justify-between items-center gap-8">
//               {visiMisiKRB.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center w-[45%] p-8 border-t-4 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
//                   style={{
//                     borderColor: item.borderColor,
//                     backgroundColor: "white",
//                     borderRadius: "1.25rem",
//                   }}
//                 >
//                   <div
//                     className="text-center"
//                     style={{
//                       color: item.color,
//                       fontSize: "1.5rem",
//                       fontWeight: "700",
//                       marginBottom: "1.5rem",
//                     }}
//                   >
//                     {item.title}
//                   </div>
//                   <div className="text-gray-800 text-lg font-medium text-center leading-relaxed">
//                     {item.content}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default TentangKami;


import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import krb from "../../../public/images/kebunraya.jpg";
import latar from "../../../public/images/KRB.png";
import { Footer } from "../../components/Footer/Footer";
import { visiMisiKRB } from "../../constants/VisiMisi";

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
        <div className="relative w-full h-[245px] bg-green-900 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold font-poppins">Tentang Kami</h1>
          </div>
        </div>

        <div
          className={`mt-20 flex flex-col items-center gap-6 px-4 ${
            hasScrolled ? "scroll-slide-in" : ""
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black text-center leading-tight font-poppins">
            KEBUN RAYA BALIKPAPAN
          </h2>

          <div className="w-full max-w-[1060px] flex flex-col items-center gap-6">
            <p className="w-full text-sm md:text-base font-medium text-center text-gray-800 leading-relaxed font-plusJakarta">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation. This is simply dummy text of the printing and typesetting industry.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 gap-10 flex-col md:flex-row">
          <div className="w-full md:w-[618px] flex flex-col justify-start items-start gap-4 px-4 md:px-0">
            <h3 className="w-full text-black text-2xl md:text-2xl font-semibold font-poppins leading-[38px] text-center md:text-left">
              Sejarah Kebun Raya Balikpapan
            </h3>
            <p className="w-full text-justify text-[#1a202c] text-base md:text-lg font-medium font-plusJakartaSans leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation. This is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
          <img className="w-[80%] md:w-[400px] h-[300px] md:h-[400px] object-cover" src={krb} />
        </div>

        <div className=" flex justify-center items-center mt-10 gap-10 flex-col-reverse md:flex-row">
          <img className="w-[80%] md:w-[400px] h-[300px] md:h-[400px] object-cover" src={krb} />

          <div className="w-full md:w-[618px] flex flex-col justify-start items-start gap-4 px-4 md:px-0">
            <h3 className="w-full text-black text-2xl md:text-2xl font-semibold font-poppins leading-[38px] text-center md:text-left">
              Sejarah Kebun Raya Balikpapan
            </h3>
            <p className="w-full text-justify text-[#1a202c] text-base md:text-lg font-medium font-plusJakartaSans leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation. This is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        {/* visi misi */}
        <div className="mt-0 relative w-full max-w-screen-xl mx-auto px-0 md:px-20">
          {/* Kontainer utama */}
          <div className="relative w-full flex justify-center items-center py-12 px-8">
            <div className="flex w-full flex-wrap justify-between items-center gap-8">
              {visiMisiKRB.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full md:w-[45%] p-8 border-t-4 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
                  style={{
                    borderColor: item.borderColor,
                    backgroundColor: "white",
                    borderRadius: "1.25rem",
                  }}
                >
                  <div
                    className="text-center"
                    style={{
                      color: item.color,
                      fontSize: "1.25rem", // Menyesuaikan ukuran font default
                      fontWeight: "700",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="text-gray-800 text-sm md:text-lg font-medium text-center leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TentangKami;
