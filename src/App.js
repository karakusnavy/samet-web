import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages

import Home from "./pages/Home";
import About from "./pages/About";
import SingleBlog from "./pages/Home/singleBlog";
import Works from "./pages/Works";
import Login from "./pages/Auth/Login";
import NewBlog from "./pages/Home/newBlog";

import firebase from "firebase";
import firebaseConfig from "./constants/firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
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
  const PrivateRoute = ({ isLoggedIn, ...props }) =>
    isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
  return (
    <Router>
      <Header />
      <div className="container containerInContainer customNav">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute
            isLoggedIn={logged}
            path="/addnewblog"
            component={NewBlog}
          />
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/blog/:slug">
            <SingleBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
