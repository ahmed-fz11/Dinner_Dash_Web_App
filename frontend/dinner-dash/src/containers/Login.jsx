import {React,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setError("");

    // Form validation
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Both fields are required");
      return;
    }

    const postData = {
      email: formData.email,
      password: formData.password,
    }

    // Make API POST request
    axios
      .post("http://localhost:3000/login", postData)
      .then((response) => {
        // Save token to local storage
        localStorage.setItem("token", JSON.stringify(response.data.token));
        console.log("user: ",response.data.user)
        localStorage.setItem("user",JSON.stringify(response.data.user))

        // Redirect to a different page or handle success
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          // Handle error response from the API
          setError(error.response.data.message);
        } else {
          // Handle other errors
          setError("An error occurred. Please try again.");
        }
      });
    }
  return (
    <div className='container-fluid p-4 background-radial-gradient overflow-hidden'>

    <div className='row'>

      <div className='col-md-6 text-center text-md-start d-flex flex-column justify-content-center'>

        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
          Tickle your Tastebuds <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>with our delicacies</span>
        </h1>

        <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
        Welcome to our food ordering platform! Whether you're a new user or a returning customer, we're here to make your culinary journey seamless. Sign up to explore a world of delicious possibilities or log in to savor your favorite flavors. Join us today and embark on a delightful food adventure!
        </p>

      </div>

      <div className='col-md-6 position-relative'>

        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className='my-5 bg-glass'>
          <div className='card-body p-5'>

          <div className="mb-4 mt-4">
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
            </div>

            <div className="mb-4 mt-4">
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
            </div>
            {error && <div className="text-danger">{error}</div>}

            <button className='btn btn-primary w-100 mb-4 mt-4' onClick={handleSubmit}>Login</button>
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
