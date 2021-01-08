import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/css/componentes/cabecalho.css';
import logo from '../assets/img/doguito.svg';

import { AuthContext } from '../contexts/Auth/AuthContext';

const Cabecalho = () => {
  const { estaAutenticado, fazerLogoff } = useContext(AuthContext);
  return (
    <header className="cabecalho container">
      <div className="menu-hamburguer">
        <span
          className="menu-hamburguer__icone"
          aria-label="Menu lateral"
        ></span>
      </div>
      <div className="cabecalho-container">
        <NavLink className="flex flex--centro" to="/">
          <img src={logo} alt="Logo Doguito" className="cabecalho__logo" />

          <h1 className="cabecalho__titulo">PetShop</h1>
        </NavLink>
      </div>
      <nav className="menu-cabecalho">
        <span className="menu-cabecalho__fechar"></span>
        <ul className="menu-itens">
          <li>
            {estaAutenticado ? (
              <NavLink
                to="#"
                onClick={() => fazerLogoff()}
                className="menu-item menu-item--entrar"
              >
                Sair
              </NavLink>
            ) : (
              <NavLink to="/login" className="menu-item menu-item--entrar">
                Entrar
              </NavLink>
            )}
          </li>
          <li>
            <NavLink to="#" className="menu-item">
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="menu-item">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre">Sobre</NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  );
};

export default Cabecalho;
