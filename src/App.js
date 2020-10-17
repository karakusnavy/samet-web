import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from "./components/Header";

// Pages

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container customNav">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
