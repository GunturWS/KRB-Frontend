import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { predictPlant } from "../../redux/actions/predictActions";
import { resetPrediction } from "../../redux/reducers/predictReducers";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const MemindaiPopUp = ({ onClose }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { prediction, dataset_id, error } = useSelector((state) => state.prediction);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreviewImage(imageURL);
    setIsLoading(true);

    const loadingMinTime = new Promise((resolve) => setTimeout(resolve, 3000)); // minimal 3 detik
    const predictionPromise = dispatch(predictPlant(file));

    await Promise.all([loadingMinTime, predictionPromise]);
    setIsLoading(false);
  };

  useEffect(() => {
    dispatch(resetPrediction());
    setPreviewImage(null);
  }, [dispatch]);
  const handleClose = () => {
    setPreviewImage(null);
    dispatch(resetPrediction());
    onClose();
  };

  const handleViewDetail = () => {
    if (dataset_id) {
      onClose();
      navigate(`/detail-konservasi/${dataset_id}`);
    } else {
      alert("Tidak ada ID dataset untuk melihat detail.");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white w-full max-w-3xl rounded-2xl shadow-xl px-6 py-8 relative flex flex-col items-center gap-6 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-all duration-200"
          >
            <AiOutlineClose size={28} />
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 tracking-tight">
            Memindai Tumbuhan
          </h2>

          {previewImage ? (
            <img
              src={previewImage}
              alt="Preview"
              className="rounded-lg shadow-lg w-full max-w-xs aspect-[3/4] object-cover"
            />
          ) : (
            <div className="w-full max-w-xs aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Tidak ada gambar
            </div>
          )}

          <p className="text-base text-gray-600 text-center font-medium">
            Hasil dari gambar di atas:
          </p>
          <div className="text-lg sm:text-xl font-semibold text-center break-words min-h-[2.5rem]">
            {isLoading ? (
              <div className="flex items-center justify-center gap-2 text-green-700">
                <div className="w-5 h-5 border-2 border-green-700 border-t-transparent rounded-full animate-spin"></div>
                <span>Memindai tumbuhan...</span>
              </div>
            ) : error ? (
              <span className="text-red-600">❌ {error}</span>
            ) : prediction?.prediction?.nama_tumbuhan ? (
              <div className="flex flex-col items-center gap-1">
                <span className="text-green-700">{prediction.prediction.nama_tumbuhan}</span>
                {prediction.prediction.akurasi_prediksi && (
                  <span className="text-sm text-gray-500">
                    Akurasi: {prediction.prediction.akurasi_prediksi}%
                  </span>
                )}
              </div>
            ) : (
              <span className="text-gray-500">Tumbuhan tidak ditemukan</span>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            onChange={handleFileChange}
            hidden
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />

          <div
            className={`grid gap-4 mt-4 w-full max-w-lg ${
              prediction?.prediction?.nama_tumbuhan && !isLoading
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {prediction?.prediction?.nama_tumbuhan && !isLoading && (
              <button
                onClick={handleViewDetail}
                className="py-2 bg-green-100 text-green-800 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200"
              >
                Lihat Detail
              </button>
            )}
            <button
              onClick={() => cameraInputRef.current.click()}
              className="py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition duration-200"
              disabled={isLoading}
            >
              Memindai
            </button>
            <button
              onClick={() => fileInputRef.current.click()}
              className="py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-100 transition duration-200"
              disabled={isLoading}
            >
              Unggah
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
