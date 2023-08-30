import {React,useState} from "react";
import "./Signup.css";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        displayName: '',
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState({});
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = {};
      
        if (!formData.fullName.trim()) {
          newErrors.fullName = 'Full Name is required';
        }
      
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        }
      
        if (!formData.password.trim()) {
          newErrors.password = 'Password is required';
        }
      
        if (formData.displayName && (formData.displayName.length < 2 || formData.displayName.length > 32)) {
          newErrors.displayName = 'Display Name must be between 2 and 32 characters';
        }
      
        setErrors(newErrors);
      
        if (Object.keys(newErrors).length === 0) {
          // Form is valid, proceed with submitting data to the backend
          const postData = {
            fullname: formData.fullName,
            displayname: formData.displayName,
            email: formData.email,
            password: formData.password,
            role: 'user',
          };
      
          // Make API POST request here
          axios.post('http://localhost:3000/signup', postData)
          .then(response => {
            // Handle success, e.g., redirect to a different page or show a success message
            navigate('/login')
          })
          .catch(error => {
            if (error.response && error.response.data) {
              // Handle specific error responses from the API, such as email already exists
              setErrors({ ...errors, email: error.response.data.message });
            } else {
              // Handle other errors
              console.error('Error:', error);
            }
          });
        }
      };
      

  return (
    <div className="container-fluid p-4 background-radial-gradient overflow-hidden">
      <div className="row">
        <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            Tickle your Tastebuds <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              with our delicacies
            </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </div>

        <div className="col-md-6 position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <div className="my-5 bg-glass">
            <div className="card-body p-5">
              <div className="row">
                <div className="col-6">
                  <div className="mb-4">
                    <label htmlFor="form1" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="form1"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="text-danger">{errors.fullName}</div>
                    )}
                  </div>
                </div>

                <div className="col-6">
                  <div className="mb-4">
                    <label htmlFor="form2" className="form-label">
                      Display Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="form2"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                    />
                    {errors.displayName && (
                      <div className="text-danger">{errors.displayName}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="form3" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="form3"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="form4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="form4"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>

              <button className="btn btn-primary w-100 mb-4" onClick={handleSubmit}>Sign Up</button>
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
  );
};

export default Signup;
