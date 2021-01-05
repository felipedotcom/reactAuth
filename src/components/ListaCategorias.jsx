import React, { useState, useEffect } from 'react'

import { busca } from '../api/api'
import { Link } from 'react-router-dom'

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    busca('/categorias', setCategorias)
  }, [])
  return (
    <ul className="lista-categorias container flex">
      {categorias.map((categoria) => (
        <Link to={`/categoria/${categoria.nome}`}>
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${categoria.nome}`}
          >
            {categoria.nome}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default ListaCategorias
