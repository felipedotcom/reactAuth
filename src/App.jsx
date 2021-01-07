import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthBackend } from "./contexts/AuthContext";
import Cabecalho from "./components/Cabecalho";
import Rotas from "./Rotas";

import "./assets/css/base/base.css";

function App() {
  return (
    <AuthBackend>
      <Router>
        <Cabecalho />
        <Rotas />
      </Router>
    </AuthBackend>
  );
}

export default App;
