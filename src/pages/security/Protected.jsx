import { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getMe } from "../../redux/actions/authActions";
import { toast } from "react-hot-toast";

const Protected = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      toast.error("Silakan login untuk mengakses halaman ini.");
      navigate("/admin/login");
      setIsLoading(false);
      return;
    }

    // Fetch profile dari backend
    dispatch(getMe())
      .then((res) => {
        // Pastikan getMe mengembalikan data user di redux store
        // dan role tersedia di res.data.role atau store
        const userRole = res?.role || "admin"; // default admin jika simulasi
        if (userRole.toLowerCase() === "admin") {
          setIsAdmin(true);
        } else {
          toast.error("Anda tidak memiliki akses ke halaman ini.");
          navigate("/*");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Terjadi kesalahan, silakan login kembali.");
        Cookies.remove("token");
        navigate("/admin/login");
      })
      .finally(() => setIsLoading(false));
  }, [dispatch, navigate]);

  if (isLoading) return <div className="text-center mt-20">Loading...</div>;

  if (!Cookies.get("token")) return <Navigate to="/admin/login" />;

  return isAdmin ? <Outlet /> : <Navigate to="/*" />;
};

export default Protected;
