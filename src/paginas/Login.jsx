import React from "react";
import { Formik, Field, Form } from "formik";
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
           /*  const resp = await cria(infos); */
            console.log(infos);
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
                  name="metadescription"
                  id="metadescription"
                  className="input"
                  type="text"
                  placeholder="Descrição do post"
                  required
                />
                <label className="input-label" htmlFor="metadescription">
                  Descrição do post
                </label>
              </div>
            </fieldset>

            <button type="submit" className="botao">
              Criar
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  )
}

export default Login
