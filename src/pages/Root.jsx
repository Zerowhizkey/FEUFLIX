import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Root;
