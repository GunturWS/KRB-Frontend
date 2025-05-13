import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [], // ⬅️ ini sangat penting
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload; // Menyimpan data kategori ke state
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // Mengatur status loading
    },
    setError: (state, action) => {
      state.error = action.payload; // Menyimpan error
    },
  },
});

export const { setCategories, setLoading, setError } = categorySlice.actions;

export default categorySlice.reducer;
