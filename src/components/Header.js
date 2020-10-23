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
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsamed"
          aria-controls="navbarsamed"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsamed">
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
              <a
                href="https://github.com/karakusnavy/samed-portfolio"
                target="_newblank"
                className="nav-link"
                style={{ float: "right" }}
              >
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
