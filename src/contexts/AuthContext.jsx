import React, { createContext } from 'react';

const AuthContext = createContext({
    estaAutenticado: false,
    fazerLogin: () => {}
});

export { AuthContext };
