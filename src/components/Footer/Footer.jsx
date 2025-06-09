import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/KebunRayaBalikpapanFooter.png";

export const Footer = () => {
  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/konservasi", label: "Konservasi" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/lokasi-kontak", label: "Lokasi & Kontak" },
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
          <p className="text-sm text-gray-400">Email: kebunrayabppn55@gmail.com</p>
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
