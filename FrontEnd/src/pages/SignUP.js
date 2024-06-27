import { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from 'axios';

import Footer from '../controllers/Footer';


export const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios
  .post("http://localhost:3001/user/signup", {name, email , password })
  .then((result) => {
    console.log(result);   
    if (result.data.message === "Signed") {
        navigate("/login");
    }
  })
  .catch((err) => console.error("Error during login:", err));

  };

  return (
    <div >
    <div className="background_image-other">
      <div className="container">
      <div className="custom-form-1">
        <div >
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success border w-100 rounded-8 text-decoration-none"
            >
              Register
            </button>
          </form>
          <p>Already Have an account</p>
          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
      </div>

    </div>
    <Footer/>
    </div>
  );
};
