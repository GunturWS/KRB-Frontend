import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token") || null, // baca token dari cookies saat init
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        // simpan ke cookies
        Cookies.set("token", action.payload, {
          expires: 1, // 1 hari
          secure: true,
          sameSite: "Strict",
        });
      } else {
        // hapus cookies
        Cookies.remove("token");
      }
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
