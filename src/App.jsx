import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Rotas from "./Rotas";
import "./assets/css/base/base.css";
import AuthBackend from "./contexts/Auth/AuthBackend";

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
