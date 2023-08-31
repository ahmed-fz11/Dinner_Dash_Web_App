import React from "react";
import UserNavbar from "./UserNavbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="min-vh-100 min-vw-100 ">
      <UserNavbar />
      <div className="container d-flex align-items-center justify-content-center flex-column border con2">
        <div className="d-flex align-items-center justify-content-center flex-column border">
          <img
            src="/public/images/Black logo - no background.png"
            alt="Logo"
            className="img-fluid img1"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center flex-column border">
          <img
            src="/public/images/homepage_food.jpg"
            alt="Food Pic"
            className="img-fluid img2 mt-2"
          />
        </div>
        <div>
          <button className="btn btn-primary mt-2">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
