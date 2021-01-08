import React, { useState, useEffect } from "react";
import { busca } from "../api/api";

import { Link } from "react-router-dom";
import "../assets/css/componentes/cartao.css";
import "../assets/css/componentes/cartao.css";

const ListaPosts = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, [url]);

  return (
    <section className="posts container">
      {posts.map((post, index) => (
        <Link
          className={`cartao-post cartao-post--${post.categoria}`}
          to={`/posts/${post.id}`}
          key={index}
        >
          <article key={post.id}>
            <h3 className="cartao-post__titulo">{post.title}</h3>
            <p className="cartao-post__meta">{post.metadescription}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default ListaPosts;
