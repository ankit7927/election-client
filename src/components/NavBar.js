import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const NavBar = () => {
  const { auth } = useAuth();

  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" class="navbar-brand">SLRTCE</Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link ">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/election" class="nav-link">Elections</Link>
            </li>
            <li class="nav-item">
              <Link to="/aboutUs" class="nav-link">About Us</Link>
            </li>
            <li class="nav-item">
              {auth.uname ? (
                <Link to="/profile" class="nav-link">{auth.uname}</Link>
              ) : (
                <Link to="/login" class="nav-link">Login</Link>
              )}
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
