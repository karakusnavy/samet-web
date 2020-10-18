import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages

import Home from "./pages/Home";
import About from "./pages/About";
import SingleBlog from "./pages/Home/singleBlog";

// Test

import TestPage from "./pages/TestPage";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container containerInContainer customNav">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/test">
            <TestPage />
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
