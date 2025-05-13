import React from "react";
import { Link } from "react-router-dom";

export const CardKonservasi = ({
  image_path,
  nama_tumbuhan,
  nama_indonesia,
  kategori,
  href,
}) => {
  const imageUrl = `http://localhost:3000/dataset/${encodeURIComponent(image_path)}`;

  return (
    <div className="flex flex-col rounded-lg border-brand-secondary-02 bg-brand-primary-08 px-8 py-6 transition delay-75 ease-in-out hover:drop-shadow-program">
      <img
        src={imageUrl}
        alt={nama_tumbuhan}
        className="w-[420px] h-[320px] rounded-md mb-4 object-cover"
      />

      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-lg font-bold truncate w-[300px] text-center">{nama_tumbuhan}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{nama_indonesia}</p>
        {kategori?.length > 0 && (
          <p className="text-sm text-gray-600 line-clamp-3">{kategori.join(", ")}</p>
        )}

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
