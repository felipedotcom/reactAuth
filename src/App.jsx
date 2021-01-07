import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Cabecalho from "./components/Cabecalho";
import Rotas from "./components/Rotas"



import "./assets/css/base/base.css";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Rotas />
    </Router>
  );
}

export default App;
