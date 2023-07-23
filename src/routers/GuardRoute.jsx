import React, { useEffect } from "react";
import useCookie from "../components/hooks/useCookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../components/google/Config";
import { setAccount } from "../redux/slice/account";

const GuardRoute = ({ children }) => {
  const { isLoggedIn } = useCookie();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn()) {
      return;
    } else {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return <div>{children}</div>;
};

export default GuardRoute;
