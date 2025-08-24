import axios from "axios";
import {
  addPlant,
  removePlant,
  setError,
  setLoading,
  setPlantDetail,
  setPlants,
  setPlantsNew,
  updatePlant,
} from "../reducers/plantsReducers";

// import { setPlants, setLoading, setError } from "../reducers/plantReducer";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getAllPlants = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${api_url}/api/plants`);
    const data = response.data; // asumsi data ada di response.data.data

    dispatch(setPlantsNew(data));
    console.log(data);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Action untuk mengambil detail tanaman berdasarkan ID
export const getPlantById = (id) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get(`${api_url}/api/plants/${id}`);
    const data = response.data; // Asumsi data ada di response.data

    // console.log(data);

    dispatch(setPlantDetail(data)); // Menyimpan detail tanaman ke Redux
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

/////////// ADMIN

export const getAllPlantsNew = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${api_url}/api/admin/plants`);
    const data = response.data; // asumsi data ada di response.data.data

    dispatch(setPlants(data.data));
    console.log(data);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getPlantByIdNew = (id) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const response = await axios.get(`${api_url}/api/admin/plants/${id}`);
    const data = response.data; // Asumsi data ada di response.data

    // console.log(data);

    dispatch(setPlantDetail(data.data)); // Menyimpan detail tanaman ke Redux
    console.log(data);
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
// export const addPlantNew = (newPlant) => async (dispatch) => {
//   try {
//     dispatch(setLoading(true));

//     const formData = new FormData();
//     formData.append("nama_indonesia", newPlant.nama_indonesia);
//     formData.append("nama_tumbuhan", newPlant.nama_tumbuhan);
//     formData.append("deskripsi", newPlant.deskripsi);
//     formData.append("source", newPlant.source);

//     // category_ids kalau array → kirim satu-satu
//     newPlant.category_ids.forEach((id) => {
//       formData.append("category_ids[]", id);
//     });

//     // file langsung append
//     formData.append("image_path", newPlant.image_path);

//     const response = await axios.post(`${api_url}/api/admin/plants`, formData);

//     dispatch(addPlant(response.data.data));
//   } catch (error) {
//     console.error("Error adding new plant:", error.response?.data || error.message);
//     dispatch(setError(error.response?.data?.message || "Failed to add plant"));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
// export const addPlantNew = (newPlant) => async (dispatch) => {
//   try {
//     dispatch(setLoading(true));

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     const response = await axios.post(`${api_url}/api/admin/plants`, newPlant, config);

//     dispatch(addPlant(response.data.data));
//     dispatch(setLoading(false));
//   } catch (error) {
//     console.error("Error adding new plant:", error.response?.data || error.message);
//     dispatch(setError(error.response?.data?.message || "Failed to add plant"));
//     dispatch(setLoading(false));
//   }
// };

export const addPlantNew = (plantData) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const formData = new FormData();
    formData.append("nama_indonesia", plantData.nama_indonesia);
    formData.append("deskripsi", plantData.deskripsi);
    formData.append("source", plantData.source);
    formData.append("nama_tumbuhan", plantData.nama_tumbuhan);

    if (Array.isArray(plantData.category_ids)) {
      formData.append("category_ids", JSON.stringify(plantData.category_ids));
    } else {
      formData.append("category_ids", String(plantData.category_ids));
    }

    formData.append("image_path", plantData.image_path);

    const response = await axios.post(`${api_url}/api/admin/plants`, formData);

    if (response.data) {
      dispatch(addPlant(response.data)); // update redux state
      return response.data; // supaya component bisa pakai await dan Swal
    } else {
      throw new Error("Data tanaman tidak diterima dari server");
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.error || error.message || "Gagal menambahkan tanaman"));
    throw error; // lempar error ke component supaya bisa ditangani Swal
  } finally {
    dispatch(setLoading(false));
  }
};

export const updatePlantnew = (plantData) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const { id } = plantData;
    const formData = new FormData();
    formData.append("nama_indonesia", plantData.nama_indonesia);
    formData.append("deskripsi", plantData.deskripsi);
    formData.append("source", plantData.source);
    formData.append("nama_tumbuhan", plantData.nama_tumbuhan);

    if (Array.isArray(plantData.category_ids)) {
      formData.append("category_ids", JSON.stringify(plantData.category_ids));
    } else {
      formData.append("category_ids", String(plantData.category_ids));
    }

    if (plantData.image_path) {
      formData.append("image_path", plantData.image_path);
    }

    const response = await axios.put(`${api_url}/api/admin/plants/${id}`, formData);

    if (response.data) {
      dispatch(updatePlant(response.data)); // update redux state
      return response.data; // supaya component bisa pakai await dan Swal
    } else {
      throw new Error("Data tanaman tidak diterima dari server");
    }
  } catch (error) {
    dispatch(setError(error.response?.data?.error || error.message || "Gagal mengupdate tanaman"));
    throw error; // lempar error ke component supaya Swal bisa menampilkan
  } finally {
    dispatch(setLoading(false));
  }
};
export const deletePlant = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await axios.delete(`${api_url}/api/admin/plants/${id}`);
    dispatch(removePlant(id)); // update state redux
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
