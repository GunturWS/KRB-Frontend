import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../redux/actions/authActions";
import Cookies from "js-cookie";

const NoAccessToken = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      setLoading(false); // tidak ada token, boleh akses children
      return;
    }

    dispatch(getMe())
      .then(() => navigate("/admin/dashboard")) // sudah login, redirect ke dashboard
      .finally(() => setLoading(false));
  }, [dispatch, navigate]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return children;
};

export default NoAccessToken;
