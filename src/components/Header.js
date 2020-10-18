import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-blog text-white">
      <div className="container py-2 customNav">
        <img
          src="https://avatars0.githubusercontent.com/u/29973831?s=460&u=9e4dc403b7e37f4eb1522507f3bb75486df592af&v=4"
          className="navbar-image"
        />
        <Link to="/" className="navbar-brand logoStyle">
          Samed Karakus
        </Link>
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <AiFillGithub style={{ marginTop: 9, fontSize: 21 }} />
              <Link
                to="/source"
                className="nav-link"
                style={{ float: "right" }}
              >
                Source
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
