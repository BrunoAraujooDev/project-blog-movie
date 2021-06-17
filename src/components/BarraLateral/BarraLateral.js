import React, {useContext} from "react";
import {Link} from "react-router-dom";


import "./BarraLateral.css";

import TemaContext from "../../Contexts/TemaContext";

const BarraLateral = ( {funcaoConfiguraTema} ) => {

    const tema = useContext(TemaContext);

    // const pegarPost = async () => {

    //     try {
    //         const resposta = await instanciaAxios.get('http://www.omdbapi.com/?i=tt3896198&apikey=54b53b34');
    //             console.log(resposta.data)
    //             console.log("texto")
    //         // setListaPost(resposta.data.vencimentos);
    
    //     } catch (error) {
    //         console.log(`Houve um problema! Erro: ${error.message}`);
    //     }
    // };

    return (
        <aside style={ { backgroundColor: tema.corFundoTema} } id="conteudo-lateral">

            <label htmlFor="tema" >Temas:</label>


            <div className="div-tema-cor" >

            <input className="radio-tema" type="radio" value="yellow" name="meuTema" id="meuTema1" />
            <label className="label-tema" htmlFor="meuTema1" id="radio-tema-verde"
            onClick= { () => {funcaoConfiguraTema("verde")} }
            >Verde</label>
            <input className="radio-tema" type="radio" value="azul" name="meuTema" id="meuTema2" />
            <label className="label-tema" htmlFor="meuTema2" id="radio-tema-azul" 
            onClick= { () => {funcaoConfiguraTema("azul")} }
            >Azul</label>
            <input className="radio-tema" type="radio" value="azul" name="meuTema" id="meuTema3"/>
            <label className="label-tema" htmlFor="meuTema3" id="radio-tema-vermelho" 
            onClick= { () => {funcaoConfiguraTema("vermelho")} }
            >Vermelho</label>

            </div>


            <h2>Principais categorias:</h2>
            
            <nav>
                
                <ul>
                    <li>
                    <Link className="lista-categorias-filme" to="/review-por-categoria/1">Ação</Link>
                    </li>
                    <li>
                    <Link className="lista-categorias-filme" to="/review-por-categoria/5">Romance</Link>
                    </li>
                    <li>
                        <Link className="lista-categorias-filme" to="/review-por-categoria/6">Suspense</Link>
                    </li>
                    <li>
                        <Link className="lista-categorias-filme" to="/lista-categoria">E mais...</Link>
                    </li>
                </ul>
            </nav>

            <div>
                <p id="sugestao-paragrafo">Alguma sugestão de filme? Conte pra gente!</p>
                <form id="box-input-bl" onSubmit="event.preventDefault()">
                    <input id="sugestao-filme" placeholder="Insira o nome do filme" />
                    <button type="submit">Sugerir</button>
                </form>
            </div>


            


        </aside>
    );
};

export default BarraLateral;