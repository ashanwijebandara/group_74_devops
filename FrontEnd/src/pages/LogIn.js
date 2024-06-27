



import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../controllers/Footer';
import axios from "axios";
import { selectUser ,login,logout} from "../slices/userSlice";
import { useSelector ,useDispatch} from "react-redux";
export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", { email, password })
      .then((result) => {
        console.log(result);   
        if (result.data.message === "Success") {
          dispatch(login(result.data.data))
          navigate("/dashboard");
        }
      })
      .catch((err) => console.error("Error during login:", err));
  };

  return (
    <div >
    <div className="background_image-other-1">
    <div className="container">
    <div className="custom-form-1">
        <div >
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="password">
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
              Log in
            </button>
          </form>
          <p>Don't Have an account</p>
          <Link to="/signup">
            SignUp
          </Link>
        </div>
      </div>
    </div>

    </div>
    <Footer/>
    </div>
    
    
  );
};
