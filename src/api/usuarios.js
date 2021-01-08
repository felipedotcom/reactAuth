// import axios from 'axios';
import { useState, useEffect } from 'react';
import { api } from './api';

const baseUrl = '/usuario';

function useAuth() {
  const [estaAutenticado, setAutenticado] = useState(false);
  const [authInfo, setAuthInfo] = useState({
    accessToken: '',
  });

  const fazerLogin = async (dados) => {
    const resposta = await api.post(baseUrl + '/login', dados);
    if (resposta.status === 200) {
      const accessToken = resposta.headers.authorization;
      // const { refreshToken } = resposta.data;
      setAuthInfo({ accessToken });
      // fazer sem localStorage antes e mostrar que só com o estado do React as informações somem
      // Fazer disclaimer que localStorage nao é o local mais seguro pra guardar tokens
      localStorage.setItem('jwt', accessToken);
      // localStorage.setItem('refreshToken', refreshToken);

      setAutenticado(true);
    }
  };

  const fazerLogoff = (dados) => {
    localStorage.setItem('jwt', '');
    // localStorage.setItem('refreshToken', '');
    setAuthInfo({ accessToken: '' });
    setAutenticado(false);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('jwt');
    if (accessToken) {
      setAutenticado(true);
      setAuthInfo({ accessToken });
    }
  }, []);

  return [estaAutenticado, fazerLogin, fazerLogoff, authInfo];
}

// async function atualizaTokens() {
//   const refreshToken = localStorage.getItem('refreshToken');
//   const resposta = await api.post(`/usuario/atualiza_token`, {
//     refreshToken,
//   });
//   const refreshTokenNovo = resposta.data.refreshToken;
//   const accessToken = resposta.headers.authorization;

//   localStorage.setItem('refreshToken', refreshTokenNovo);
//   localStorage.setItem('jwt', accessToken);
//   return { accessToken, refreshToken };
// }



// api.interceptors.response.use(
//   (resposta) => resposta,
//   async (erro) => {
//     const { config, response } = erro;
//     const requisicaoOriginal = config;
//     if (response.status === 401 && requisicaoOriginal && !erro.config.__isRetryRequest) {
//       erro.config.__isRetryRequest = true

//       const { accessToken } = await atualizaTokens();
//       erro.config.headers['Authorization'] = `Bearer ${accessToken}`;
//       return axios(erro.config); // retry da requisição
//     }
//     return Promise.reject(erro);
//   }
// );

export default useAuth;
