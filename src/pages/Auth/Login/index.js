import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../../api/firebaseFuncts";
import "./style.css";

function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const enterLogin = () => {
    login(username, password).then((response) => {
      console.log(response);
      if (response == true) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.reload();
      } else {
        alert("Wrong info");
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
