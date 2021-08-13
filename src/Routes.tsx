import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PageLayoutWrapper from "./app/PageLayoutWrapper";

const Routes = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}`} component={PageLayoutWrapper} />
      </Switch>
    </div>
  )
};

export default Routes;