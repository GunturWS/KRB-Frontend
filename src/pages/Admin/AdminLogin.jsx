import React from "react";
import bgKRB from "../../../public/images/kebunraya.jpg";

const AdminLogin = () => {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
        <img
          src={bgKRB} // pastikan path-nya sesuai di public/
          alt="Kebun Raya"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Nama</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                placeholder="admin@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-400"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
