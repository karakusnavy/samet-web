import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../../../constants/firebase";
import "./style.css";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const enterLogin = () => {
    firebase
      .database()
      .ref("samedblog/users")
      .orderByChild("username")
      .equalTo(username)
      .once("value", function (snapshot) {
        if (!snapshot.exists()) {
          alert("Wrong info");
          return;
        } else {
          // set
          var object = snapshot.val();
          for (const prop in object) {
            if (object[prop].password == password) {
              localStorage.setItem("username", username);
              localStorage.setItem("password", password);
              window.location.reload();
            } else {
              alert("Wrong password");
            }
          }
        }
      });
  };

  return (
    <div style={{ paddingTop: 10 }}>
      <h4>Login</h4>
      <input
        onChange={(text) => setUsername(text.target.value)}
        placeholder="username"
      />
      <br />
      <input
        onChange={(text) => setPassword(text.target.value)}
        placeholder="password"
      />
      <br />

      <button
        className="globalButton"
        style={{ border: "none" }}
        onClick={() => enterLogin()}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
