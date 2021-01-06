import React from "react";
import { Formik, Field, Form } from "formik";
import { fazerLogin } from "../api/usuarios"
import "../assets/css/componentes/inputs.css";
import "../assets/css/componentes/botao.css";

const Login = () => {
  return (
    <main className="container flex flex--centro">
      <section className="cartao">
        <h2 className="cartao__titulo">Login</h2>
        <Formik
          initialValues={{
            //Puxa pelo campo name do Field
            email: "",
            senha: "",
          }}
          onSubmit={async (infos) => {
            const resp = await fazerLogin(infos);
            console.log(infos);
            console.log('resposta: ' + resp)
          }}
        >
          <Form className="formulario flex flex--coluna">
            <fieldset>
              <div className="input-container">
                <Field
                  name="email"
                  id="email"
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                />
                <label className="input-label" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-container">
                <Field
                  name="senha"
                  id="senha"
                  className="input"
                  type="password"
                  placeholder="Senha"
                  required
                />
                <label className="input-label" htmlFor="senha">
                  Senha
                </label>
              </div>
            </fieldset>

            <button type="submit" className="botao">
              Fazer login
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default Login
