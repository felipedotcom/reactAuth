import { api } from "./api";

const baseUrl = "/usuario";

export const fazerLogin = async (dados) => {
  const resposta = await api.post(baseUrl + "/login", dados);

  if (resposta.status === 200) {
    localStorage.setItem("jwt", resposta.headers.authorization);
    return resposta;
  }

  throw new Error(resposta.body); // arrumar isso talvez
};
