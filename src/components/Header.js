import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark text-white">
      <div className="container py-2">
        <img
          src="https://avatars0.githubusercontent.com/u/29973831?s=460&u=9e4dc403b7e37f4eb1522507f3bb75486df592af&v=4"
          className="navbar-image"
        />
        <a className="navbar-brand" href="#">
          Samed Karakuş
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-samed"
          aria-controls="navbar-samed"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbar-samed">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Source
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
