import bgKRB from "../../../public/images/kebunraya.jpg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { adminLogin } from "../../redux/actions/authActions";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!username) {
      setErrorMessage("Silahkan isi username anda");
      return;
    }

    if (!password) {
      setErrorMessage("Silahkan isi password anda");
      return;
    }

    // Jika Remember Me dicentang, simpan username dan password di localStorage
    if (rememberMe) {
      localStorage.setItem("rememberedUsername", username);
      localStorage.setItem("rememberedPassword", password);
    } else {
      // Jika tidak dicentang, hapus data dari localStorage
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");
    }

    // Dispatch ke Redux action
    dispatch(adminLogin(username, password, navigate));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  useEffect(() => {
    const rememberedUsername = localStorage.getItem("rememberedUsername");
    const rememberedPassword = localStorage.getItem("rememberedPassword");

    if (rememberedUsername && rememberedPassword) {
      setUsername(rememberedUsername);
      setPassword(rememberedPassword);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Left background image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <img src={bgKRB} alt="Kebun Raya" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white font-bold text-4xl md:text-5xl font-poppins text-center px-4">
            Admin Panel <br /> Kebun Raya Balikpapan
          </h1>
        </div>
      </div>

      {/* Right login form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6 py-10">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-color-primary hover:underline mb-6"
          >
            <IoMdArrowRoundBack /> Kembali ke Home
          </Link>

          <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-2">Selamat Datang 👋</h2>
          <p className="text-gray-500 text-sm mb-6 font-poppins">
            Masukkan akun admin Anda untuk melanjutkan
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username */}
            <div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-400 font-poppins"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-400 font-poppins"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
              />
              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={togglePassword}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            {/* Error */}
            {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}

            {/* Remember me & forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-xs font-poppins text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                  className="mr-2"
                />
                Ingat Saya
              </label>
              <Link
                to="/verify-email"
                className="text-xs font-medium text-green-600 hover:underline"
              >
                Lupa Kata Sandi?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold font-poppins hover:bg-green-700 transition"
            >
              Masuk
            </button>
          </form>

          {/* <p className="mt-6 text-center text-sm text-gray-500 font-poppins">
            Belum punya akun?{" "}
            <Link to="/admin/register" className="text-green-600 font-semibold hover:underline">
              Daftar di sini
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
