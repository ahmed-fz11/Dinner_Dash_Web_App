import React from "react";
// import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
     <div className="container-fluid vw-100 vh-100">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-12 ">
          <div
            className="card bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <div className="mb-4 mx-5 w-100">
                <label htmlFor="email" className="text-white form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                />
              </div>

              <div className="mb-4 mx-5 w-100">
                <label htmlFor="password" className="text-white form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                />
              </div>

              <button className="btn btn-outline-light mx-2 px-5" type="button">
                Login
              </button>

              <div>
                <p className="mb-0 d-flex flex-column align-items-center mt-2">
                  Don't have an account?{" "}
                  <Link className="nav-link text-danger" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
