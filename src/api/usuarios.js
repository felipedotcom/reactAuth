import { useState } from 'react';
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
      setAuthInfo({ accessToken });

      localStorage.setItem('jwt', accessToken);
      setAutenticado(true);
    }
  };

  const fazerLogoff = (dados) => {
    localStorage.setItem('jwt', null);
    setAuthInfo({ accessToken: '' });
    setAutenticado(false);
  };

  return [estaAutenticado, fazerLogin, fazerLogoff, authInfo];
}

export default useAuth;
