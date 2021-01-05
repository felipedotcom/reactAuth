import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Cabecalho from './components/Cabecalho'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Categoria from './paginas/Categoria'
import Post from './paginas/Post'
import Pagina404 from './paginas/Pagina404'
import CriaPost from './paginas/CriaPost'

import './assets/css/base/base.css'

function App() {
  return (
    <Router>
      <Cabecalho />
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
        
        <Route path="/posts/cria">
          <CriaPost />
        </Route>

        <Route path="/posts/:id">
          <Post />
        </Route>


        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
