import { combineReducers } from "@reduxjs/toolkit";
import plantsReducers from "./plantsReducers";
import categoryReducers from "./categoryReducers";
import predictReducers from "./predictReducers";
import authReducers from "./authReducers";

export default combineReducers({
  plants: plantsReducers,
  categories: categoryReducers, // Pastikan ini sesuai dengan nama reducer
  prediction: predictReducers,
  auth: authReducers,
});
