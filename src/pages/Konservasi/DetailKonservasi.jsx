// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getPlantById } from "../../redux/actions/plantActions";
// import { Header } from "../../components/Header/Header";
// import { Footer } from "../../components/Footer/Footer";

// const DetailKonservasi = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const { plantDetail, loading, error } = useSelector((state) => state.plants);
//   const plant = plantDetail;

//   useEffect(() => {
//     dispatch(getPlantById(Number(id)));
//   }, [dispatch, id]);

//   if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>;
//   if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

//   return (
//     <>
//       <Header />

//       {/* Banner */}
//       <div className="relative w-full h-[200px] md:h-[220px] lg:h-[260px] bg-gradient-to-r from-green-700 to-green-900 shadow-md flex items-center justify-center text-center px-4">
//         <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-poppins tracking-wide">
//           Detail Tanaman Konservasi
//         </h1>
//       </div>

//       {plant && (
//         <section className="container mx-auto px-4 py-14 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
//           {/* Gambar Tanaman */}
//           <div className="w-full max-w-lg lg:w-1/2">
//             <img
//               src="https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
//               alt={plant.nama_tumbuhan}
//               className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg ring-2 ring-green-200"
//             />
//           </div>

//           {/* Detail Deskripsi */}
//           <div className="flex flex-col gap-5 w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
//             <h2 className="text-2xl sm:text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
//               {plant.nama_tumbuhan}
//             </h2>

//             <p className="inline-block bg-green-50 text-green-700 text-base sm:text-md font-semibold italic px-4 py-1 rounded-full border border-green-300 shadow-sm self-center lg:self-start">
//               {plant.nama_indonesia}
//             </p>

//             {/* Kategori Tanaman */}
//             {plant.kategori?.length > 0 && (
//               <div className="flex flex-col items-center lg:items-start gap-2">
//                 <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
//                   Kategori:
//                 </h4>
//                 <div className="flex flex-wrap justify-center lg:justify-start gap-3">
//                   {plant.kategori.map((item, idx) => (
//                     <span
//                       key={idx}
//                       className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-4 py-1.5 text-sm font-medium rounded-full shadow hover:shadow-md transition-shadow duration-200"
//                     >
//                       <svg
//                         className="w-4 h-4 text-green-600"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M2 5a2 2 0 012-2h4a1 1 0 011 1v1h5a1 1 0 011 1v1a2 2 0 01-2 2h-3l2.293 2.293a1 1 0 01-1.414 1.414L9 9H6a2 2 0 01-2-2V5z" />
//                       </svg>
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Deskripsi */}
//             <article className="text-justify text-gray-800 leading-relaxed text-base font-[Plus_Jakarta_Sans] mt-2">
//               {plant.deskripsi}
//             </article>
//           </div>
//         </section>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default DetailKonservasi;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlantById } from "../../redux/actions/plantActions";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

const DetailKonservasi = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { plantDetail, loading, error } = useSelector((state) => state.plants);
  const plant = plantDetail;

  useEffect(() => {
    dispatch(getPlantById(Number(id)));
  }, [dispatch, id]);

  if (loading) return <div className="text-center py-20 text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <>
      <Header />

      {/* Banner */}
      <div className="relative w-full h-[200px] md:h-[220px] lg:h-[260px] bg-gradient-to-r from-green-700 to-green-900 shadow-md flex items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-poppins tracking-wide">
          Detail Tanaman Konservasi
        </h1>
      </div>

      {plant && (
        <section className="container mx-auto px-4 py-14 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* Gambar Tanaman */}
          <div className="w-full max-w-lg lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1744132813623-5ce3c521eef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt={plant.nama_tumbuhan}
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg ring-2 ring-green-200"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-white p-6 border border-gray-200 rounded-xl shadow-md">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{plant.nama_tumbuhan}</h2>
              <p className="text-lg font-medium text-green-700 italic">{plant.nama_indonesia}</p>
              <hr className="border-green-400 w-1/4 mx-auto lg:mx-0" />
              <p className="text-base text-gray-800 text-justify">{plant.deskripsi}</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {plant.kategori?.map((item, index) => (
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

      <Footer />
    </>
  );
};

export default DetailKonservasi;
