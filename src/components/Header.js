import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import PersonelLinks from "../constants/personalLinks";
import firebase from "firebase";
import firebaseConfig from "../constants/firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Header() {
  const history = useHistory();
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    authControl();
  }, []);
  const authControl = () => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    firebase
      .database()
      .ref("samedblog/users")
      .orderByChild("username")
      .equalTo(username)
      .once("value", function (snapshot) {
        if (!snapshot.exists()) {
          setLogged(false);
          return;
        } else {
          // set
          var object = snapshot.val();
          for (const prop in object) {
            if (object[prop].password == password) {
              setLogged(true);
            } else {
              setLogged(false);
            }
          }
        }
      });
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

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
            {logged == false ? (
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
            ) : null}
            {logged == true ? (
              <>
                <li className="nav-item">
                  <Link to="/addnewblog" className="nav-link">
                    Add Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={() => logout()}
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
