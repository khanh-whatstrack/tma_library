import React, { useEffect } from "react";
import useCookie from "../components/hooks/useCookie";
import { useNavigate } from "react-router-dom";

const GuardRouteAuth = ({ children }) => {
  const { isLoggedIn } = useCookie();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    } else {
      return;
    }
  }, [isLoggedIn]);
  return <div>{children}</div>;
};

export default GuardRouteAuth;
