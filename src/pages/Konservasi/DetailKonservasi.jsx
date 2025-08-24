import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlantById, getPlantByIdNew } from "../../redux/actions/plantActions";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const DetailKonservasi = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Ambil data dan loading dari redux state
  const { plantDetail, loading } = useSelector((state) => state.plants);

  // State lokal untuk memastikan loading minimal 1 detik
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Fetch data tanaman berdasarkan id
    // dispatch(getPlantById(Number(id)));
    dispatch(getPlantByIdNew(Number(id)));

    // Set loading minimal 1 detik
    setShowLoading(true);
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 500);

    // Bersihkan timeout kalau komponen unmount atau id berubah
    return () => clearTimeout(timer);
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <div className="page-fade-in">
        {/* Banner */}
        <div className="relative w-full h-[200px] md:h-[220px] lg:h-[260px]  bg-[#629f80] shadow-md flex items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-poppins tracking-wide">
            Detail Tanaman Konservasi
          </h1>
        </div>

        {/* Loading Spinner */}
        {(loading || showLoading) && (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Konten Tanaman */}
        {!loading && !showLoading && plantDetail && (
          <section className="container mx-auto px-4 py-14 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
            {/* Gambar Tanaman */}
            <div className="w-full max-w-lg lg:w-1/2">
              <img
                src={plantDetail.image_path}
                alt={plantDetail.nama_tumbuhan}
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg ring-2 ring-green-200"
              />
            </div>

            {/* Detail Tanaman */}
            <div className="w-full lg:w-1/2 bg-white p-6 border border-gray-200 rounded-xl shadow-md">
              <div className="space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900">
                  {plantDetail.nama_tumbuhan || plantDetail.nama_indonesia || "Nama tidak tersedia"}
                </h2>

                <p className="text-lg font-medium text-green-700 italic">
                  {plantDetail.nama_indonesia}
                </p>
                <hr className="border-green-400 w-1/4 mx-auto lg:mx-0" />
                <p className="text-base text-gray-800 text-justify">{plantDetail.deskripsi}</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {plantDetail.categories?.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-green-700 px-3 py-1 rounded-full text-sm border border-green-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </>
  );
};

export default DetailKonservasi;
