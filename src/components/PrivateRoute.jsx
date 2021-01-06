import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  return (
    <Route
      render={({ location }) =>
        false ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
