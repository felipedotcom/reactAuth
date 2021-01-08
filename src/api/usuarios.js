import { useState } from "react";
import { api } from "./api";

const baseUrl = "/usuario";

function useAuth() {
  const [estaAutenticado, setAutenticado] = useState(false);

  const fazerLogin = async (dados) => {
    const resposta = await api.post(baseUrl + "/login", dados);
    if (resposta.status === 200) {
      localStorage.setItem("jwt", resposta.headers.authorization);
      setAutenticado(true);
    }
  };

  const fazerLogoff = (dados) => {
    localStorage.setItem("jwt", null);
    setAutenticado(false);
  };

  return [estaAutenticado, fazerLogin,fazerLogoff];
}

export default useAuth;
