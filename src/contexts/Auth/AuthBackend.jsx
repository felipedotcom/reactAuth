import React, {useState}  from 'react';
import {AuthContext} from "./AuthContext"
import useAuth from "../../api/usuarios"
const AuthBackend = ({ children }) => {
    const [estaAutenticado, fazerLogin, fazerLogoff] = useAuth();
    return (
      <AuthContext.Provider
        value={{
          estaAutenticado,
          fazerLogin,
           fazerLogoff
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthBackend