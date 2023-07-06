// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoginData } from './LoginData';
const Navbar = (id) => {
  return (
    <nav className="navbar">
    {
      console.log(LoginData[id])
    }
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/login">Log In</Link>
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </nav>
  );
}

export default Navbar;