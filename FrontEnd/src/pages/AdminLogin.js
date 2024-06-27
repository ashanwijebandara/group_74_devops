import React, { useState } from "react";
import { Navbar } from '../controllers/Navbar';
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/admin"); 
    }
    else {
      
      window.alert("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className="background_image-other">
      <Navbar />
      <div>
        <div className="custom-form">
          <h2>Login</h2>
          <form>
            <div className="custom-form-group">
              <label htmlFor="username"> 
                <strong>Username</strong>
              </label>
              <input
                type="text" 
                placeholder="Enter Username"
                autoComplete="off"
                name="username"
                className="custom-form-control"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="custom-form-group">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="custom-form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="custom-button"
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
