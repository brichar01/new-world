import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import ArticleContainer from './app/ArticleContainer';
import HomePage from "./app/HomePage";

const Routes = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/home`} exact component={HomePage} />
        <Route path={`${path}/article/{articleID}`} exact component={ArticleContainer} />
        <Route path="/"><Redirect to={`${path}/home`} /></Route>
      </Switch>
    </div>
  )
};

export default Routes;