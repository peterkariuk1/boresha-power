import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css"; 

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful");
    navigate("/login");
  };

  return (
    <div className="register-container">
      
      <div className="register-image"></div>

      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
