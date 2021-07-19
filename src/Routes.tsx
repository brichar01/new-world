import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./app/HomePage";

const Routes = () => {
  return (
      <Router>
          <Route path="/new-world" exact component={HomePage} />
      </Router>
  )
};

export default Routes;