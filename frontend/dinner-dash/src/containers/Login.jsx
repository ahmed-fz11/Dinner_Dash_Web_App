import React from "react";
// import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='container-fluid p-4 background-radial-gradient overflow-hidden'>

    <div className='row'>

      <div className='col-md-6 text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Tickle your Tastebuds <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>with our delicacies</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet, itaque accusantium odio, soluta, corrupti aliquam
          quibusdam tempora at cupiditate quis eum maiores libero
          veritatis? Dicta facilis sint aliquid ipsum atque?
        </p>

      </div>

      <div className='col-md-6 position-relative'>

        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className='my-5 bg-glass'>
          <div className='card-body p-5'>

            <div className='mb-4 mt-4'>
              <label htmlFor='form3' className='form-label'>Email</label>
              <input type='email' className='form-control' id='form3' />
            </div>

            <div className='mb-4 mt-4'>
              <label htmlFor='form4' className='form-label'>Password</label>
              <input type='password' className='form-control' id='form4' />
            </div>

            <button className='btn btn-primary w-100 mb-4 mt-4'>Login</button>
            <div>
                <p className="mb-0 d-flex flex-column align-items-center mt-4">
                  Don't have an account?{" "}
                  <Link className="nav-link text-danger mt-1" to="/signup">
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
