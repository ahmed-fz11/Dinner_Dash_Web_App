import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-fluid">
        <a className="navbar-brand">
          <img
            src="/public/images/Black logo - no background.png"
            alt="Logo"
            width="100"
            height="45"
            className="d-inline-block align-top"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cart
              </a>
            </li>
          </ul>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
