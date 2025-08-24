import axios from "axios";
import Cookies from "js-cookie"; // ⬅️ import js-cookie
import { setToken, setUser } from "../reducers/authReducers";
import { toast } from "react-toastify";

const api_url = import.meta.env.VITE_REACT_API_ADDRESS;

export const adminLogin = (username, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(`${api_url}/api/admin/login`, {
      username,
      password,
    });

    const { token } = response.data;

    // Simpan token ke cookies
    Cookies.set("token", token, { expires: 1, secure: true, sameSite: "Strict" });

    // Simpan juga ke redux state
    dispatch(setToken(token));

    toast.success("Login Berhasil");
    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 1000);
  } catch (error) {
    if (error.response) {
      if (error.response.status === 403) {
        toast.error("Username atau Password salah. Silahkan coba lagi.");
      } else if (error.response.status === 404) {
        toast.error("Username tidak terdaftar. Silakan cek kembali.");
      } else {
        toast.error("Login gagal. Silakan coba lagi nanti.");
      }
    } else {
      toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
    }
  }
};

export const registerAdmin =
  (fullname, username, password, confirmPassword, navigate) => async () => {
    try {
      const response = await axios.post(`${api_url}/api/admin/register`, {
        fullname,
        username,
        password,
        confirmPassword,
      });

      if (response.data.success) {
        toast.success("Registrasi berhasil! Silakan login.");
        setTimeout(() => {
          navigate("/admin/login");
        }, 1200);
      } else {
        toast.error(response.data.message || "Registrasi gagal.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Registrasi gagal.");
      } else {
        toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
      }
    }
  };

export const adminLogout = (navigate) => async (dispatch) => {
  try {
    // Panggil backend logout (opsional, bisa dilewati juga)
    await axios.post(`${api_url}/api/admin/logout`);

    // Hapus token dari cookies & redux
    Cookies.remove("token");
    dispatch(setToken(null));
    dispatch(setUser(null));

    toast.success("Logout berhasil");
    navigate("/admin/login");
  } catch (error) {
    console.error("Error logging out:", error);
    toast.error("Logout gagal. Silakan coba lagi.");
  }
};

export const getMe = (navigate, navigatePathSuccess, navigatePathError) => async (dispatch) => {
  try {
    let token = Cookies.get("token"); // ini langsung string atau undefined

    if (!token) throw new Error("Token not found");

    const response = await axios.get(`${api_url}/api/admin/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.data.data;
    dispatch(setUser(data));

    if (navigatePathSuccess) {
      navigate(navigatePathSuccess);
    }

    return data; // optional, supaya bisa await di wrapper
  } catch (error) {
    console.error("Error fetching profile:", error);
    dispatch(setToken(null));
    dispatch(setUser(null));
    Cookies.remove("token");

    if (navigatePathError) {
      navigate(navigatePathError);
    }

    return null; // supaya await di wrapper tidak hang
  }
};
