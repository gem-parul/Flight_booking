import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "./../../utilities/generic-functions";
import ToastNotification from "../ToastNotification/ToastNotification"; 
import './Login.scss'
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]+$/; // Only alphabets
    if (!username) return "Username is required";
    if (!usernameRegex.test(username)) return "Username must contain only alphabets";
    return "";
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) return "Password is required";
    if (!passwordRegex.test(password))
      return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!errors.username && !errors.password) {
      if (input.username === "Admin" && input.password === "Admin@123") {
        localStorage.setItem("isLoggedIn", true);
        navigate("/all-flights");
      } else {
        showToast("Enter correct username and password", "error");
      }
    }
  };
  
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });

    // Validate inputs as they are entered
    if (name === "username") {
      setErrors({ ...errors, username: validateUsername(value) });
    } else if (name === "password") {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const isFormValid = !errors.username && !errors.password && input.username && input.password;

  return (
    <>
      <ToastNotification />
        <div class="back">
  <img src="/assets/login.png" alt="loginImage" class="login-img" />
  <div class="card">
  
      <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"   
              name="username"
              value={input.username}
              onChange={handleInputChange}
              id="username"
            />
            {errors.username && (
                  <small className="text-danger">{errors.username}</small>
                )}
          </div>
          <div className="form-group">   

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              id="password"
            />
            {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
          </div>
          <button  type="submit"
                  disabled={!isFormValid}className="btn btn-primary">Submit</button>   
        </form>
  </div>
</div>

    </>
  );
};

export default Login;
