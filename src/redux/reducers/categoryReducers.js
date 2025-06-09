import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    updateCategory: (state, action) => {
      const updated = action.payload;
      const index = state.categories.findIndex((cat) => cat.id === updated.id);
      if (index !== -1) {
        state.categories[index] = updated;
      }
    },
    deleteCategory: (state, action) => {
      const id = action.payload;
      state.categories = state.categories.filter((cat) => cat.id !== id);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCategories, addCategory, updateCategory, deleteCategory, setLoading, setError } =
  categorySlice.actions;

export default categorySlice.reducer;
