import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import PersonelLinks from "../constants/personalLinks";

function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-blog text-white">
      <div className="container py-2 customNav">
        <Link to="/" className="navbar-brand logoStyle">
          Samet<a style={{ color: "#f3d02e" }}>.</a>
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
              <Link to="/works" className="nav-link">
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>{" "}
            <li className="nav-item">
              <a href={"mailto:" + PersonelLinks.mail} className="nav-link">
                Contact Me
              </a>
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
