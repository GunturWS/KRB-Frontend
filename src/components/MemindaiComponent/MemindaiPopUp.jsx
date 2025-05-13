import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const MemindaiPopUp = ({ onClose }) => {
  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  //   const [previewImage, setPreviewImage] = useState(null);
  //   const [plantName, setPlantName] = useState(null);

  //   const handleFileChange = async (event) => {
  //     const file = event.target.files[0];
  //     if (!file) return;

  //     // Tampilkan preview gambar
  //     setPreviewImage(URL.createObjectURL(file));
  //     setPlantName(null); // reset hasil sebelumnya

  //     // Kirim ke backend
  //     const formData = new FormData();
  //     formData.append("image", file);

  //     try {
  //       const res = await fetch("http://localhost:6969/scan", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const data = await res.json();
  //       console.log("Hasil Deteksi:", data);
  //       setPlantName(data?.plantName || "Tumbuhan tidak dikenali");
  //     } catch (error) {
  //       console.error("Gagal memindai:", error);
  //       setPlantName("Terjadi kesalahan saat memindai.");
  //     }
  //   };

  const [previewImage, setPreviewImage] = useState(null);
  const [detectedPlant, setDetectedPlant] = useState(null);
  

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Tampilkan gambar yang dipilih
    const imageURL = URL.createObjectURL(file);
    setPreviewImage(imageURL);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("http://localhost:6969/scan", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Hasil Deteksi:", data);

      // Misalnya API mengembalikan: { name: "Daun Sirih" }
      setDetectedPlant(data?.name || "Tidak diketahui");
    } catch (error) {
      console.error("Gagal memindai:", error);
      setDetectedPlant("Gagal mendeteksi");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-[90%] max-w-3xl rounded-2xl shadow-xl px-8 py-10 relative flex flex-col items-center gap-6">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all duration-200"
        >
          <AiOutlineClose size={28} />
        </button>

        {/* Judul */}
        <h2 className="text-3xl font-bold text-center text-gray-800 tracking-tight">
          Memindai Tumbuhan
        </h2>

        {/* Gambar */}
        {previewImage ? (
          <img
            src={previewImage || "https://placehold.co/300x220"}
            alt="Scan Result"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover"
          />
        ) : (
          <div className="w-full max-w-sm h-[220px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            Tidak ada gambar
          </div>
        )}

        {/* Deskripsi */}
        <p className="text-lg text-gray-600 text-center font-medium">Hasil dari gambar di atas:</p>
        <p className="text-xl font-semibold text-green-700 text-center">
          {detectedPlant ? detectedPlant : "[Nama Tumbuhan]"}
        </p>

        {/* Hidden Input */}
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} hidden />

        <input
          type="file"
          accept="image/*"
          capture="environment"
          ref={cameraInputRef}
          onChange={handleFileChange}
          hidden
        />

        {/* Tombol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full max-w-lg">
          <button className="py-2 bg-green-100 text-green-800 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200">
            Lihat Detail
          </button>
          <button
            onClick={() => cameraInputRef.current.click()}
            className="py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition duration-200"
          >
            Memindai
          </button>
          <button
            onClick={() => fileInputRef.current.click()}
            className="py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition duration-200"
          >
            Unggah
          </button>
        </div>
      </div>
    </div>
  );
};
