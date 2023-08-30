import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

const Signup = () => {
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

            <div className='row'>
              <div className='col-6'>
                <div className='mb-4'>
                  <label htmlFor='form1' className='form-label'>Full Name</label>
                  <input type='text' className='form-control' id='form1' />
                </div>
              </div>

              <div className='col-6'>
                <div className='mb-4'>
                  <label htmlFor='form2' className='form-label'>Display Name</label>
                  <input type='text' className='form-control' id='form2' />
                </div>
              </div>
            </div>

            <div className='mb-4'>
              <label htmlFor='form3' className='form-label'>Email</label>
              <input type='email' className='form-control' id='form3' />
            </div>

            <div className='mb-4'>
              <label htmlFor='form4' className='form-label'>Password</label>
              <input type='password' className='form-control' id='form4' />
            </div>

            <button className='btn btn-primary w-100 mb-4'>Sign Up</button>
            <div>
                <p className="mb-0 d-flex flex-column align-items-center mt-2">
                  Already have an account?{" "}
                  <Link className="nav-link text-danger" to="/login">
                    Login
                  </Link>
                </p>
              </div>

          </div>
        </div>

      </div>

    </div>

  </div>
  )
}

export default Signup