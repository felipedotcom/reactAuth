import React from "react";
import { Formik, Field, Form } from "formik";
const CriaPost = () => {
  return (
    <section className="cartao">
      <h2 className="cartao__titulo">Complete seu cadastro</h2>
      <Formik
        initialValues={{
          //Puxa pelo campo name do Field
          title: "Meu post",
          body: "",
          metadescription: "",
          categoria: "",
          subcategoria: "",
        }}
        onSubmit={(infos) => {
          console.log(infos);
        }}
      >
        <Form className="formulario flex flex--coluna">
          <fieldset>
            <legend className="formulario__legenda">Informações do post</legend>
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
                <option value="teste">Teste</option>
                <option value="teste">Teste</option>
                <option value="teste">Teste</option>
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
                <option value="teste">Teste</option>
                <option value="teste">Teste</option>
                <option value="teste">Teste</option>
              </Field>
              <label className="input-label" htmlFor="body">
                SubCategoria
              </label>
            </div>
          </fieldset>

          <button className="botao">Criar</button>
        </Form>
      </Formik>
    </section>
  );
};

export default CriaPost;
