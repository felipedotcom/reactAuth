import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Categoria from "./paginas/Categoria";
import Post from "./paginas/Post";
import Pagina404 from "./paginas/Pagina404";
import CriaPost from "./paginas/CriaPost";
import Login from './paginas/Login'
import PrivateRoute from "./components/PrivateRoute";

const Rotas = () => {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:id">
          <Categoria />
        </Route>

        <PrivateRoute path="/posts/cria">
          <CriaPost />
        </PrivateRoute>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/posts/:id">
          <Post />
        </Route>

        <Route>
          <Pagina404 />
        </Route>
      </Switch>
  );
};

export default Rotas;
