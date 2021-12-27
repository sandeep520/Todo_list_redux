import React from "react";
import { publicRoute, privateRoute } from "./RoutingData";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute.jsx";

function Route() {
  return (
    <div>
      {publicRoute?.map(({title,component,path,restricted},key) => (
        <PublicRoute key={key} title={title} component={component} path={path} restricted={restricted} exact />
      ))}
      {privateRoute?.map(({title,component,path},key) => (
        <PrivateRoute key={key} title={title} component={component} path={path} exact />
      ))}
    </div>
  );
}

export default Route;
