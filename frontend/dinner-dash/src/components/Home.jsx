import React from "react";

const Home = () => {
  return (
    <div className="container vw-100 vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <img src="/public/images/Black logo - no background.png" alt="Logo" className="img-fluid w-25"/>
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <img
          src="/public/images/homepage_food.jpg"
          alt="Food Pic"
          className="img-fluid w-50"
        />
      </div>
      <div>
        <button className="btn btn-primary">Order now</button>
      </div>
    </div>
  );
};

export default Home;
