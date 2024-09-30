import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showToast } from "./../../utilities/generic-functions";
import ToastNotification from "../ToastNotification/ToastNotification";
import "./Login.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [showPassword, setShowPassword] = useState(false);

  const checkAutoFill = () => {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput) setErrors((prev) => ({ ...prev, username: validateUsername(usernameInput) }));
    if (passwordInput) setErrors((prev) => ({ ...prev, password: validatePassword(passwordInput) }));

    setInput({
      username: usernameInput || "",
      password: passwordInput || "",
    });
  };

  useEffect(() => {
    checkAutoFill();
  }, [checkAutoFill]);

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]+$/;
    if (!username) return "Username is required";
    if (!usernameRegex.test(username))
      return "Username must contain only alphabets";
    return "";
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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

    if (name === "username") {
      setErrors({ ...errors, username: validateUsername(value) });
    } else if (name === "password") {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const isFormValid =
    !errors.username && !errors.password && input.username && input.password;

  return (
    <>
      <ToastNotification />
      <div className="back">
        <img src="/assets/login-img.jpg" alt="login-img-not-found" className="login-img" />
        <div className="main-card">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <span className="login-text">LOGIN</span>
              <span className="cred">Please enter your login credentials</span>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
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
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  id="password"
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <small className="text-danger">{errors.password}</small>
              )}
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className="submit-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
