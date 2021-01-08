import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/Auth/AuthContext';

const PrivateRoute = ({ children }) => {
  const { estaAutenticado } = useContext(AuthContext);
  return (
    <Route
      render={({ location }) =>
        estaAutenticado ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
