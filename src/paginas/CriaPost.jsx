import React from 'react'

const CriaPost = () => {
    return (
        <section className="cartao">
            <h2 className="cartao__titulo">Complete seu cadastro</h2>
            <form action="./cadastro_concluido.html" className="formulario flex flex--coluna">
                <fieldset>
                    <legend className="formulario__legenda">Informações do post</legend>
                    <div className="input-container">
                        <input name="title" id="title" className="input" type="text" placeholder="Título" data-tipo="title" required/>
                        <label className="input-label" for="title">Título</label>
                    </div>
                    <div className="input-container">
                        <input name="metadescription" id="metadescription" className="input" type="text" placeholder="Descrição do post" required/>
                        <label className="input-label" for="metadescription">Descrição do post</label>
                    </div>
                    <div className="input-container">
                        <input name="body" id="body" className="input" type="text" placeholder="Conteúdo" required/>
                        <label className="input-label" for="body">Conteúdo</label>
                    </div>

                    <div className="input-container">
                        <input name="body" id="body" className="input" type="text" placeholder="Conteúdo" required/>
                        <label className="input-label" for="body">Conteúdo</label>
                    </div>
                </fieldset>
                
                <button className="botao">Criar</button>
            </form>
        </section>
    )
}

export default CriaPost