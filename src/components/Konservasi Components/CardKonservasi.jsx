import { Link } from "react-router-dom";

export const CardKonservasi = ({ image_path, nama_tumbuhan, nama_indonesia, kategori, href }) => {
  const getEncodedImagePath = (url) => {
    try {
      const urlObj = new URL(url);
      urlObj.pathname = urlObj.pathname
        .split("/")
        .map(decodeURIComponent)
        .map(encodeURIComponent)
        .join("/");
      return urlObj.toString();
    } catch (error) {
      return url;
    }
  };

  const encodedImagePath = getEncodedImagePath(image_path);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white transition duration-300 hover:shadow-md">
      {/* Gambar */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={encodedImagePath}
          alt={nama_tumbuhan}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />
      </div>

      {/* Isi konten */}
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold text-gray-800 truncate">{nama_tumbuhan}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{nama_indonesia}</p>

        {/* Kategori */}
        {kategori?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {kategori.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-emerald-100 px-3 py-0.5 text-xs text-emerald-700 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <Link
          to={href}
          className="mt-4 inline-block text-sm font-medium text-green-600 hover:underline transition"
        >
          Lihat Selengkapnya →
        </Link>
      </div>
    </div>
  );
};
