import axios from "axios";
import { setCategories, setLoading, setError } from "../reducers/categoryReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${api_url}/api/categories`);
    const data = response.data;
    // console.log(" data",data);
    

    dispatch(setCategories(data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
