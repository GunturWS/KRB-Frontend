import bgKRB from "../../../public/images/kebunraya.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerAdmin } from "../../redux/actions/authActions";

const AdminRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passworderror, setPasswordError] = useState("");
  const [errors, setErrors] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registAcc = async (event) => {
    event.preventDefault();

    if (!fullname) {
      setErrorMessage("Silahkan isi nama lengkap anda");
      return;
    }

    if (!username) {
      setErrorMessage("Silahkan isi username anda");
      return;
    }

    if (!password) {
      setErrorMessage("Silahkan masukkan password anda");
      return;
    }

    if (passworderror) {
      setErrorMessage("Kata sandi dan konfirmasi tidak cocok");
      return;
    }

    const checkbox = document.getElementById("ch");
    if (!checkbox.checked) {
      setErrorMessage("Harap setujui syarat dan ketentuan");
      return;
    }

    dispatch(
      registerAdmin(fullname, username, password, confirmPassword, navigate, setErrors, errors)
    );
  };

  const passwordValidation = (password, confirm) => {
    if (password !== confirm) {
      setPasswordError("Password tidak sama!");
    } else {
      setPasswordError("");
    }
  };

  const handlePasswordMatch = (event) => {
    setPassword(event.target.value);
    passwordValidation(event.target.value, confirmPassword);
  };

  const handleConfirmPasswordMatch = (event) => {
    setConfirmPassword(event.target.value);
    passwordValidation(password, event.target.value);
  };

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

      {/* Right Register Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6 py-10">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <Link
            to="/admin/login"
            className="flex items-center gap-2 text-sm font-medium text-color-primary hover:underline mb-6"
          >
            <IoMdArrowRoundBack /> Kembali ke Login
          </Link>

          <h2 className="text-3xl font-bold font-poppins text-gray-800 mb-2">Daftar Akun Baru</h2>
          <p className="text-gray-500 text-sm mb-6 font-poppins">
            Silakan isi data di bawah untuk membuat akun admin baru
          </p>

          <form onSubmit={registAcc} className="space-y-4">
            {/* Fullname */}
            <div>
              <input
                type="text"
                id="fullname"
                placeholder="Full Name"
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-400 font-poppins"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  setErrorMessage("");
                }}
              />
            </div>

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
                onChange={handlePasswordMatch}
              />
              <button
                type="button"
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmpassword"
                placeholder="Konfirmasi Password"
                className="w-full p-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 placeholder:text-gray-400 font-poppins"
                value={confirmPassword}
                onChange={handleConfirmPasswordMatch}
              />
              <button
                type="button"
                aria-label="toggle confirm password visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>

            {/* Error */}
            {(errorMessage || passworderror) && (
              <p className="text-red-500 text-xs font-poppins">{errorMessage || passworderror}</p>
            )}

            {/* Checkbox */}
            <div className="flex items-center text-xs font-poppins text-gray-600">
              <input type="checkbox" id="ch" className="mr-2" />
              <label htmlFor="ch">
                Saya setuju dengan{" "}
                <span className="text-green-600 font-semibold">syarat dan ketentuan</span>
              </label>
            </div>

            {/* Register button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold font-poppins hover:bg-green-700 transition"
            >
              Daftar
            </button>
          </form>

          {/* Link ke login */}
          <p className="mt-6 text-center text-sm text-gray-500 font-poppins">
            Sudah punya akun?{" "}
            <Link to="/admin/login" className="text-green-600 font-semibold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
