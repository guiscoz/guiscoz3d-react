import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Animations from "./components/Animations";
import Rigging from "./components/Rigging";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/models">
          <Models />
        </Route>
        <Route path="/animations">
          <Animations />
        </Route>
        <Route path="/rigs">
          <Rigging />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
