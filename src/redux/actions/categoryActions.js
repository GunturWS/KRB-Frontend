// import axios from "axios";
// import { setCategories, setLoading, setError } from "../reducers/categoryReducers";

// const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

// export const getAllCategory = () => async (dispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const response = await axios.get(`${api_url}/api/categories`);
//     const data = response.data;
//     // console.log(" data",data);
    

//     dispatch(setCategories(data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

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
    dispatch(addCategory(response.data));
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
    dispatch(updateCategory(response.data));
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
    await axios.delete(`${api_url}/api/categories/${id}`);
    dispatch(deleteCategory(id));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
