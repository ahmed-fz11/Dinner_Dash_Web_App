import React from "react";
import UserNavbar from "./UserNavbar";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/menu");
  };
  return (
    <div className="min-vh-100 min-vw-100 pg">
      <UserNavbar />
      <div className="container p-4 mt-5">
        <h1 className="head-text d-flex align-content-center justify-content-center mb-5">
          Delicious Food <br /> Delivered at <br /> your Doorstep
        </h1>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-dark mt-5 rounded-pill btn-lg"
            onClick={handleClick}
          >
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
