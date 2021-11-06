import React from "react";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Houses from "../components/pages/Houses";
import Footer from "../components/Footer";
import NotFound404 from "../components/pages/NotFound404";
const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact="true" element={<Home />} />
      <Route path="/houses" element={<Houses />} />
      <Route element={<NotFound404 />} />
    </Switch>

    <Footer />
  </Router>
);

export default Routes;
