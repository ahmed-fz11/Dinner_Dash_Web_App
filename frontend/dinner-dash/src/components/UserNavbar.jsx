import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user")) || null;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  const handleLogoutClick = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            {user && user.role == "user" && (
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  Orders
                </Link>
              </li>
            )}
            {user && user.role == "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/ordersdashboard">
                  Orders
                </Link>
              </li>
            )}
            {user && user.role == "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/createitem">
                  Manage Items
                </Link>
              </li>
            )}
          </ul>
          {user ? (
            <>
              <p className="m-2">Welcome: {user.fullname}</p>
              <button className="btn btn-danger" onClick={handleLogoutClick}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
