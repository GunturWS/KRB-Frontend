import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plants: [], // Menyimpan semua tanaman
  plantsNew: [], // Menyimpan semua tanaman
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
    setPlantsNew: (state, action) => {
      state.plantsNew = action.payload;
    },
    setPlantDetail: (state, action) => {
      state.plantDetail = action.payload;
    },
    addPlant: (state, action) => {
      state.plants.push(action.payload); // Tambahkan tanaman baru ke array
    },
    updatePlant: (state, action) => {
      const updated = action.payload;
      const index = state.plants.findIndex((plant) => plant.id === updated.id);
      if (index !== -1) {
        state.plants[index] = updated; // Update data tanaman di array
      }
    },
    removePlant: (state, action) => {
      state.plants = state.plants.filter((p) => p.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPlants,
  setPlantsNew,
  setPlantDetail,
  addPlant,
  updatePlant,
  removePlant,
  setLoading,
  setError,
} = plantSlice.actions;

export default plantSlice.reducer;
