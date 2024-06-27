import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import React from "react";
import { FaUserCog } from 'react-icons/fa';
import "./Navbar.css"; 
export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/home" className="navbar-link">
          Home
        </Link>
        <Link to="/signup" className="navbar-link">
         SignUp
        </Link>
        <Link to="/login" className="navbar-link">
          LogIn
        </Link>
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/paymentmethord" className="navbar-link">
          Payment Method
        </Link>
        
        <Link to="/adminlogin" className="navbar-link">
          <FaUserCog style={{ fontSize: 36 }} />
        </Link>
      </div>
      <div>
        {!cookies.access_token ? (
          <Link to="/login" className="navbar-link">
            Logout
          </Link>
        ) : (
          <button onClick={logout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
