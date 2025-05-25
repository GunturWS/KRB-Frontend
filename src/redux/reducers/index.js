import { combineReducers } from "@reduxjs/toolkit";
import plantsReducers from "./plantsReducers";
import categoryReducers from "./categoryReducers";
import predictReducers from "./predictReducers";

export default combineReducers({
  plants: plantsReducers,
  categories: categoryReducers, // Pastikan ini sesuai dengan nama reducer
  prediction: predictReducers,
});
