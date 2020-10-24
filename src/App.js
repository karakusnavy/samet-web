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

import { auth } from "./api/firebaseFuncts";

export default function App() {
  const [logged, setLogged] = useState(false);
  useEffect( async () => {
    await authControl();
  }, []);
  const authControl = async () => {
    await auth().then((response) => {
      setLogged(response);
    });
  };
  const PrivateRoute = ({ isLoggedIn, ...props }) =>
    isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />;
  return (
    <Router>
      <Header logged={logged} />
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
