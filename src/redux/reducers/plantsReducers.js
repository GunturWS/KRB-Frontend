import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plants: [], // Menyimpan semua tanaman
  plantDetail: null, // Menyimpan detail tanaman berdasarkan ID
  loading: false,
  error: null,
};

const plantSlice = createSlice({
  name: "plant",
  initialState,
  reducers: {
    setPlants: (state, action) => {
      state.plants = action.payload;
    },
    setPlantDetail: (state, action) => {
      state.plantDetail = action.payload; // Menyimpan detail tanaman berdasarkan ID
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPlants, setPlantDetail, setLoading, setError } = plantSlice.actions;

export default plantSlice.reducer;
