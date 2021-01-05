import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'

import '../assets/css/post.css'

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState({})
  const history = useHistory()

  useEffect(() => {
    busca(`/posts/${id}`, setPost).catch((erro) => {
      history.push('/404') //pegando erro disparado dentro do busca para fazer o catch
    })
  }, [id, history])//tava dando warning aqui por isso eu coloquei

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="cartao__texto">{post.body}</p>
      </article>
    </main>
  )
}
export default Post