import React, { useEffect } from "react";
import useCookie from "../hooks/useCookie";
import { json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { app, auth } from "../google/Config";

const Home = () => {
  const { removeCookie } = useCookie();
  const accountuser = JSON.parse(localStorage.getItem("account"));
  const navigate = useNavigate();
  const handleSignout = () => {
    removeCookie();
    localStorage.clear();
    signOut(auth).then(() => {});
    navigate("/login");
  };
  return (
    <div>
      <h1>Home</h1>
      <div className="  h-[150px] w-[150px] rounded-full border-[1px] border-black relative">
        <img
          src={accountuser?.photoURL}
          alt=""
          className=" absolute w-full h-full rounded-full"
        />
      </div>
      <p>
        Email:<span>{accountuser?.email}</span>
      </p>
      <p>
        Username:<span>{accountuser?.displayName}</span>
      </p>
      <button
        onClick={handleSignout}
        className=" pt-1 pb-1 pl-2 pr-2 border-[1px] cursor-pointer border-black rounded-[5px] hover:bg-black hover:text-white"
      >
        Signout
      </button>
    </div>
  );
};

export default Home;
