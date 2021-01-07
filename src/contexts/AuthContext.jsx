import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthBackend = ({ children }) => {
  const [estaAutenticado, setAutenticado] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        estaAutenticado,
        fazerLogin: () => setAutenticado(true),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthBackend };
