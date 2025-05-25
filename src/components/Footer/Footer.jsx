// import React from "react";
// import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";
// import KebunRayaBalikpapanlogo from "../../../public/images/KebunRayaBalikpapanlogo.png";
// export const Footer = () => {
//   return (
//     <footer className="bg-gray-900 mt-4 py-10 px-4 text-white">
//       <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
//         {/* Logo */}
//         <div className="bg-gray-700 rounded-lg w-64 h-16 flex items-center justify-center">
//           <span className="text-xl font-bold text-white font-poppins">LOGO</span>
//         </div>

//         {/* Menu Links */}
//         <nav className="flex flex-wrap justify-center gap-6">
//           {["Beranda", "Konservasi", "Tentang Kami", "Location & Contact"].map((item, index) => (
//             <span
//               key={index}
//               className="text-base text-white font-medium hover:text-gray-400 cursor-pointer"
//             >
//               {item}
//             </span>
//           ))}
//         </nav>

//         {/* Social Icons */}
//         <div className="flex gap-5 flex-wrap justify-center">
//           <a
//             href="https://www.facebook.com/KebunRayaBalikpapan?rdid=28NHXZgLYUSJvXbe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A3WfVk9Ut%2F#"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
//               <FaFacebookF className="text-white text-lg" />
//             </div>
//           </a>
//           <a
//             href="https://www.instagram.com/kebunrayabppnofficial?igsh=b3g0aDhkZmhrdWZh"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-yellow-500 rounded-full flex items-center justify-center hover:from-pink-500 hover:to-yellow-400 transition">
//               <FaInstagram className="text-white text-lg" />
//             </div>
//           </a>
//           <a
//             href="https://www.tiktok.com/@kebun_raya_balikpapan?_t=ZS-8vdP2WiVQO8&_r=1"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition">
//               <FaTiktok className="text-white text-lg" />
//             </div>
//           </a>
//           <a
//             href="https://www.youtube.com/@kebunrayabalikpapan3470"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition">
//               <FaYoutube className="text-white text-lg" />
//             </div>
//           </a>
//           <a
//             href="https://api.whatsapp.com/send/?phone=6282225333318&text&type=phone_number&app_absent=0"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition">
//               <FaWhatsapp className="text-white text-lg" />
//             </div>
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="text-sm text-center text-gray-400 pt-6">
//           © 2025 <strong>Kebun Raya Balikpapan</strong>. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// import React from "react";
// import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";
// import KebunRayaBalikpapanlogo from "../../../public/images/KebunRayaBalikpapanFooter.png";
// import { Link } from "react-router-dom";

// export const Footer = () => {
//   const navLinks = [
//     { to: "/", label: "Beranda" },
//     { to: "/konservasi", label: "Konservasi" },
//     { to: "/tentang-kami", label: "Tentang Kami" },
//     { to: "/lokasi", label: "Lokasi & Kontak" },
//     { to: "/faq-fasilitas", label: "FAQ & Fasilitas" },
//   ];

//   return (
//     <footer className="bg-[#1a1a1a] text-gray-300 px-6 pt-12 pb-6 border-t border-gray-700">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
//         {/* Logo dan Deskripsi */}
//         <div className="flex-1 text-center md:text-left space-y-4">
//           <img
//             src={KebunRayaBalikpapanlogo}
//             alt="Logo"
//             className="w-20 h-20 mx-auto md:mx-0 rounded-sm"
//           />
//           <p className="text-sm text-gray-400">
// Kebun Raya Balikpapan adalah tempat konservasi alam tropis yang menyediakan ruang
// edukasi, penelitian, dan wisata hijau bagi masyarakat.
//           </p>
//         </div>

//         {/* Navigasi */}
//         <div className="flex-1">
//           <h4 className="text-white font-semibold mb-4 text-center md:text-left">Navigasi</h4>
//           <ul className="flex flex-col items-center md:items-start space-y-2">
//             {navLinks.map((link, index) => (
//               <Link key={index} to={link.to} className="text-sm hover:text-yellow-400 transition">
//                 {link.label}
//               </Link>
//             ))}
//           </ul>
//         </div>

//         {/* Kontak & Sosial */}
//         <div className="flex-1 text-center md:text-left">
//           <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
//           <p className="text-sm text-gray-400">WhatsApp: +62 822-2533-3318</p>
//           <p className="text-sm text-gray-400 mb-4">Email: info@konservasi.id</p>

//           <div className="flex justify-center md:justify-start gap-4 mt-2">
//             <a
//               href="https://www.facebook.com/KebunRayaBalikpapan"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-blue-500 transition"
//             >
//               <FaFacebookF size={20} />
//             </a>
//             <a
//               href="https://www.instagram.com/kebunrayabppnofficial"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-pink-500 transition"
//             >
//               <FaInstagram size={20} />
//             </a>
//             <a
//               href="https://www.tiktok.com/@kebun_raya_balikpapan"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-white transition"
//             >
//               <FaTiktok size={20} />
//             </a>
//             <a
//               href="https://www.youtube.com/@kebunrayabalikpapan3470"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-red-500 transition"
//             >
//               <FaYoutube size={20} />
//             </a>
//             <a
//               href="https://api.whatsapp.com/send/?phone=6282225333318"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-green-400 transition"
//             >
//               <FaWhatsapp size={20} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-white font-semibold">Kebun Raya Balikpapan</span>. Semua hak
//         dilindungi.
//       </div>
//     </footer>
//   );
// };import React from "react";


// import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import Logo from "../../../public/images/KebunRayaBalikpapanFooter.png";

// export const Footer = () => {
//   const navLinks = [
//     { to: "/", label: "Beranda" },
//     { to: "/konservasi", label: "Konservasi" },
//     { to: "/tentang-kami", label: "Tentang Kami" },
//     { to: "/lokasi", label: "Lokasi & Kontak" },
//     // { to: "/faq-fasilitas", label: "FAQ & Fasilitas" },
//   ];

//   return (
//     <footer className="bg-[#0d1b12] text-gray-300 px-6 py-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Logo & Deskripsi */}
//         <div className="text-center md:text-left">
//           <img src={Logo} alt="Kebun Raya Balikpapan" className="w-20 h-20 mx-auto md:mx-0 mb-4" />
//           <p className="text-sm text-gray-400">
//             Kebun Raya Balikpapan adalah tempat konservasi alam tropis yang menyediakan ruang
//             edukasi, penelitian, dan wisata hijau bagi masyarakat.
//           </p>
//         </div>

//         {/* Navigasi */}
//         <div className="text-center md:text-left">
//           <h3 className="text-white font-semibold mb-3">Navigasi</h3>
//           <ul className="space-y-2">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <Link to={link.to} className="text-sm hover:text-green-400 transition duration-300">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Sosial Media */}
//         <div className="text-center md:text-left">
//           <h3 className="text-white font-semibold mb-3">Ikuti Kami</h3>
//           <div className="flex justify-center md:justify-start gap-3 flex-wrap">
//             {[
//               {
//                 icon: <FaFacebookF />,
//                 href: "https://www.facebook.com/KebunRayaBalikpapan",
//                 color: "hover:bg-blue-600",
//               },
//               {
//                 icon: <FaInstagram />,
//                 href: "https://www.instagram.com/kebunrayabppnofficial",
//                 color: "hover:bg-pink-600",
//               },
//               {
//                 icon: <FaTiktok />,
//                 href: "https://www.tiktok.com/@kebun_raya_balikpapan",
//                 color: "hover:bg-white text-black",
//               },
//               {
//                 icon: <FaYoutube />,
//                 href: "https://www.youtube.com/@kebunrayabalikpapan3470",
//                 color: "hover:bg-red-600",
//               },
//               {
//                 icon: <FaWhatsapp />,
//                 href: "https://api.whatsapp.com/send/?phone=6282225333318",
//                 color: "hover:bg-green-500",
//               },
//             ].map(({ icon, href, color }, idx) => (
//               <a
//                 key={idx}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 ${color} transition duration-300`}
//               >
//                 {icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Kontak Info */}
//         <div className="text-center md:text-left">
//           <h3 className="text-white font-semibold mb-3">Kontak</h3>
//           <p className="text-sm text-gray-400">WhatsApp: +62 822-2533-3318</p>
//           <p className="text-sm text-gray-400">Email: info@konservasi.id</p>
//         </div>
//       </div>

//       <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-white font-semibold">Kebun Raya Balikpapan</span>. Semua hak
//         dilindungi.
//       </div>
//     </footer>
//   );
// };
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/KebunRayaBalikpapanFooter.png";

export const Footer = () => {
  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/konservasi", label: "Konservasi" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/lokasi", label: "Lokasi & Kontak" },
  ];

  return (
    <footer className="bg-[#0d1b12] text-gray-300 px-4 py-10 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Logo & Deskripsi */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img src={Logo} alt="Kebun Raya Balikpapan" className="w-20 h-20 mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Kebun Raya Balikpapan adalah tempat konservasi alam tropis yang menyediakan ruang
            edukasi, penelitian, dan wisata hijau bagi masyarakat.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-white font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="text-sm hover:text-green-400 transition duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-white font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            {[
              {
                icon: <FaFacebookF />,
                href: "https://www.facebook.com/KebunRayaBalikpapan",
                color: "hover:bg-blue-600",
              },
              {
                icon: <FaInstagram />,
                href: "https://www.instagram.com/kebunrayabppnofficial",
                color: "hover:bg-pink-600",
              },
              {
                icon: <FaTiktok />,
                href: "https://www.tiktok.com/@kebun_raya_balikpapan",
                color: "hover:bg-white text-black",
              },
              {
                icon: <FaYoutube />,
                href: "https://www.youtube.com/@kebunrayabalikpapan3470",
                color: "hover:bg-red-600",
              },
              {
                icon: <FaWhatsapp />,
                href: "https://api.whatsapp.com/send/?phone=6282225333318",
                color: "hover:bg-green-500",
              },
            ].map(({ icon, href, color }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 ${color} transition duration-300`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Kontak Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-white font-semibold mb-3">Kontak</h3>
          <p className="text-sm text-gray-400">WhatsApp: +62 822-2533-3318</p>
          <p className="text-sm text-gray-400">Email: info@konservasi.id</p>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Kebun Raya Balikpapan</span>. Semua hak
        dilindungi.
      </div>
    </footer>
  );
};
