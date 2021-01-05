import React, { useEffect, useState } from 'react'
import { Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import SubCategoria from './Subcategoria'
import { busca } from '../api/api'
import ListaPosts from '../components/ListaPosts'
import ListaCategorias from '../components/ListaCategorias'

import '../assets/css/blog.css'

const Categoria = () => {
  const { path, url } = useRouteMatch()
  const [subcategorias, setSubCategorias] = useState([])
  const { id } = useParams()

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias)
    })
  }, [id]) // precisa do id para o React atualizar o component

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ListaCategorias />

      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>

        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts?categoria=${id}`} />
        </Route>
      </Switch>
    </>
  )
}

export default Categoria
