import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let redirectPath = params.get("redirect");

    if (redirectPath && redirectPath !== location.pathname) {
      if (redirectPath.startsWith("/jeju-deers-frontend")) {
        redirectPath = redirectPath.replace("/jeju-deers-frontend", "");
      }

      if (redirectPath === "") {
        redirectPath = "/";
      }

      navigate(redirectPath);
    }
  }, [location, navigate]);

  return null;
};

export default RedirectHandler;
