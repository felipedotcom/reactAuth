import { api } from './api';

const baseUrl = '/posts';

export const cria = async (dadosPost, accessToken) => {
  const resposta = await api.post(baseUrl, dadosPost, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });

  if (resposta.status === 201) {
    return resposta.data;
  }

  throw new Error(resposta.body); // arrumar isso talvez
};
