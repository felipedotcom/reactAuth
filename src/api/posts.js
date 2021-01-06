import { api } from './api';

const baseUrl = '/posts';

export const cria = async (dados) => {
  const resposta = await api.post(baseUrl, dados);

  if (resposta.status === 201) {
    return resposta.data;
  }

  throw new Error(resposta.body); // arrumar isso talvez
};
