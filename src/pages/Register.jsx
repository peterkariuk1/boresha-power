import React, {useState} from 'react'
import {useNavigate, Link} from "react-router-dom"
import "../styles/App.css";
import "../styles/register.css";

const Register = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    passwordConfirm:""
  });

 
const navigate = useNavigate();

const handleChange = (e) => {
  setUser({...user, [e.target.name]: e.target.value});
};

const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem("user",JSON.stringify(user));
  alert("You have been registered successfully!Please log in.");
  navigate("/login");
};

  return ( 
    
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}required></input>


        <input 
        type="text"
        name="email"
        placeholder="Enter your email"
        value={user.email}
        onChange={handleChange} />

        <input 
        type="text"
        name="password"
        placeholder="Enter password"
        value={user.password}
        onChange={handleChange} />

        <input 
        type="text"
        name="passwordConfirm"
        placeholder="Confirm password"
        value={user.passwordConfirm}
        onChange={handleChange} />
        </form>

<p>Already have an account?<Link to ="/login">Login</Link></p>
<button type="submit" onClick={handleSubmit}>Register</button>

      </div>
  
  );
};

export default Register
