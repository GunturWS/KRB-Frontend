import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-4 py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="bg-gray-700 rounded-lg w-64 h-16 flex items-center justify-center">
          <span className="text-xl font-bold text-white font-poppins">LOGO</span>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            "Tentang Kami",
            "Layanan",
            "Blog",
            "Kontak",
            "Kebijakan Privasi",
            "Syarat & Ketentuan",
          ].map((item, index) => (
            <span
              key={index}
              className="text-base text-white font-medium hover:text-gray-400 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-5 flex-wrap justify-center">
          <a
            href="https://www.facebook.com/KebunRayaBalikpapan?rdid=28NHXZgLYUSJvXbe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A3WfVk9Ut%2F#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
              <FaFacebookF className="text-white text-lg" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/kebunrayabppnofficial?igsh=b3g0aDhkZmhrdWZh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-yellow-500 rounded-full flex items-center justify-center hover:from-pink-500 hover:to-yellow-400 transition">
              <FaInstagram className="text-white text-lg" />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@kebun_raya_balikpapan?_t=ZS-8vdP2WiVQO8&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition">
              <FaTiktok className="text-white text-lg" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@kebunrayabalikpapan3470"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-500 transition">
              <FaYoutube className="text-white text-lg" />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=6282225333318&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition">
              <FaWhatsapp className="text-white text-lg" />
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center text-gray-400 pt-6">
          © 2025 <strong>Kebun Raya Balikpapan</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
