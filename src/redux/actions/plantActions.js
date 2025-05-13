import axios from "axios";
import { setError, setLoading, setPlantDetail, setPlants } from "../reducers/plantsReducers";
// import { setPlants, setLoading, setError } from "../reducers/plantReducer";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getAllPlants = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${api_url}/api/plants`);
    const data = response.data; // asumsi data ada di response.data.data

    dispatch(setPlants(data));
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
