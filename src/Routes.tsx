import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from "react-router-dom";
import HomePage from "./app/HomePage";

const Routes = () => {
  return (
    <Router>
      <Route path="/new-world"></Route>
      <Route path="/home" exact component={HomePage} />
      <Route path="/">
        <Redirect to="/home"/>
      </Route>
    </Router>
  )
};

export default Routes;