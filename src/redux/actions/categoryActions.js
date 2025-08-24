import axios from "axios";
import {
  setCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  setLoading,
  setError,
} from "../reducers/categoryReducers";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

// Get all categories
export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${api_url}/api/categories`);
    dispatch(setCategories(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Add category
export const addCategoryAction = (newCategory) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post(`${api_url}/api/categories/add`, newCategory);
    console.log("Response:", response.data); // debug dulu
    dispatch(addCategory(response.data.data)); // ambil property data saja
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Update category
export const updateCategoryAction = (id, updatedData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.put(`${api_url}/api/categories/${id}`, updatedData);
    console.log("Update response:", response.data); // debug
    dispatch(updateCategory(response.data.data)); // ambil property data saja
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Delete category
export const deleteCategoryAction = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.delete(`${api_url}/api/categories/${id}`);
    console.log("Delete response:", response.data); // debug
    // Kirim ID ke reducer, bukan seluruh response
    dispatch(deleteCategory(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
