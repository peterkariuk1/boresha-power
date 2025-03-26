import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if user exists in localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
      alert("Login successful");
      navigate("/Appliances");  
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
      <img src="src/assets/saving.jpeg" alt="Illustration" />
      </div>
      <div className="login-form">

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Signup</Link>
      </p>
    </div>
          </div>
  );
};

export default Login;
