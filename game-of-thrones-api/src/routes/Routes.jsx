import React from "react";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import Stark from "../components/pages/Stark";
import Footer from "../components/Footer";
import NotFound404 from "../components/pages/NotFound404";
const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact="true" element={<Home />} />
      <Route path="/stark" element={<Stark />} />
      <Route element={<NotFound404 />} />
    </Switch>

    <Footer />
  </Router>
);

export default Routes;
