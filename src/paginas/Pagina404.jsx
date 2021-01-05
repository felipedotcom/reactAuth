import React from 'react'
import { Link } from 'react-router-dom'

import imagem from '../assets/img/doguito404.svg';
import '../assets/css/404.css'

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={imagem} alt="ilustração doguito"/>
      <p className="naoencontrado-texto">Ops, essa página não existe</p>
      <Link className="naoencontrado-link" to="/">Volte para a página inicial</Link>
    </main>
  )
}

export default Pagina404
