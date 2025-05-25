import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prediction: null,
  dataset_id: null,
  loading: false,
  error: null,
};

const predictSlice = createSlice({
  name: "predict",
  initialState,
  reducers: {
    setPrediction: (state, action) => {
      state.prediction = action.payload;
      state.dataset_id = action.payload.dataset_id || null; // langsung ambil dataset_id
    },
    setPredictLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPredictError: (state, action) => {
      state.error = action.payload;
    },
    resetPrediction: (state) => {
      state.prediction = null;
      state.dataset_id = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setPrediction, setPredictLoading, setPredictError, resetPrediction } =
  predictSlice.actions;
export default predictSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   prediction: null,
//   dataset_id: null,
//   loading: false,
//   error: null,
// };

// const predictSlice = createSlice({
//   name: "predict",
//   initialState,
//   reducers: {
//     setPrediction: (state, action) => {
//       state.prediction = action.payload;
//       // Ambil plant_id dari response, misal di action.payload.prediction.id
//       // Dalam reducer setPrediction:
//       state.dataset_id = action.payload.prediction?.id || null;
//     },
//     setPredictLoading: (state, action) => {
//       state.loading = action.payload;
//     },
//     setPredictError: (state, action) => {
//       state.error = action.payload;
//     },
//     resetPrediction: (state) => {
//       state.prediction = null;
//       // Dalam resetPrediction:
//       state.dataset_id = null; // reset juga dataset_id
//       state.loading = false;
//       state.error = null;
//     },
//   },
// });

// export const { setPrediction, setPredictLoading, setPredictError, resetPrediction } =
//   predictSlice.actions;

// export default predictSlice.reducer;
