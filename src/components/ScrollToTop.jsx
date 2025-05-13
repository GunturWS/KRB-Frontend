import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas setiap kali pathname berubah
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // tidak render apapun
};
