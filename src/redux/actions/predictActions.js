import axios from "axios";
import { setPredictError, setPrediction, setPredictLoading } from "../reducers/predictReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const predictPlant = (file) => async (dispatch) => {
  try {
    dispatch(setPredictLoading(true));

    const formData = new FormData();
    formData.append("image", file);

    const { data } = await axios.post(`${api_url}/api/predict`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // console.log(data);

    // Data langsung objek prediksi, simpan langsung
    dispatch(setPrediction(data));
  } catch (error) {
    dispatch(setPredictError(error?.response?.data?.message || "Terjadi kesalahan saat memindai."));
  } finally {
    dispatch(setPredictLoading(false));
  }
};
