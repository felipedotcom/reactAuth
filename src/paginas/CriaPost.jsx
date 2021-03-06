import React, { useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import { AuthContext } from '../contexts/Auth/AuthContext';

import '../assets/css/componentes/inputs.css';
import '../assets/css/componentes/botao.css';

import { cria } from '../api/posts';

const CriaPost = () => {
  const { authInfo } = useContext(AuthContext);

  return (
    <main className="container flex flex--centro">
      <section className="cartao">
        <h2 className="cartao__titulo">Complete seu cadastro</h2>
        <Formik
          initialValues={{
            //Puxa pelo campo name do Field
            title: 'Meu post',
            body: '',
            metadescription: '',
            categoria: '',
            subcategoria: '',
          }}
          onSubmit={async (infos) => {
            const resp = await cria(infos, authInfo.accessToken);
            console.log(resp);
          }}
        >
          <Form className="formulario flex flex--coluna">
            <fieldset>
              <legend className="formulario__legenda">
                Informações do post
              </legend>
              <div className="input-container">
                <Field
                  name="title"
                  id="title"
                  className="input"
                  type="text"
                  placeholder="Título"
                  data-tipo="title"
                  required
                />
                <label className="input-label" htmlFor="title">
                  Título
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
              <div className="input-container">
                <Field
                  name="body"
                  id="body"
                  className="input"
                  type="text"
                  placeholder="Conteúdo"
                  required
                />
                <label className="input-label" htmlFor="body">
                  Conteúdo
                </label>
              </div>

              <div className="input-container">
                <Field
                  name="categoria"
                  id="categoria"
                  as="select"
                  className="input"
                  placeholder="Conteúdo"
                  required
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="bem-estar">Bem-estar</option>
                  <option value="comportamento">Comportamento</option>
                </Field>
                <label className="input-label" htmlFor="body">
                  Categorias
                </label>
              </div>

              <div className="input-container">
                <Field
                  name="subcategoria"
                  id="subcategoria"
                  as="select"
                  className="input"
                  placeholder="Conteúdo"
                  required
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="saude" defaultValue>
                    Saúde
                  </option>
                  <option value="higiene">Higiene</option>
                  <option value="treinamento">Treinamento</option>
                  <option value="educacao">Educação</option>
                </Field>
                <label className="input-label" htmlFor="body">
                  SubCategoria
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
  );
};

export default CriaPost;
