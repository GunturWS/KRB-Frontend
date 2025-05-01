import React from "react";
import { Link } from "react-router-dom";

export const CardKonservasi = ({ imageSrc, title, description, href }) => {
  return (
    <div className="flex flex-col rounded-lg border-brand-secondary-02 bg-brand-primary-08 px-8 py-6 transition delay-75 ease-in-out hover:drop-shadow-program">
      <img
        src={imageSrc}
        alt={title}
        className="w-[420px] h-[320px] rounded-md mb-4 object-cover"
      />

      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Tombol Lihat Detail */}
        <Link
          to={href}
          className="mt-2 inline-block rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600 hover:scale-105"
        >
          Lihat Tumbuhan
        </Link>
      </div>
    </div>
  );
};
