import React, { useContext} from "react";
import {Link} from "react-router-dom";
import "./ListaCategorias.css";

import TemaContext from "../../../Contexts/TemaContext";

const ListaCategorias = ({lista}) => {

    

    const tema = useContext(TemaContext);


    return (
        <section style={ { backgroundColor: tema.corFundoTema} } id="lista-categorias">           
                <h2 id="nova-categoria-titulo">Lista de gêneros</h2>
                

            <ul id="lista-categoria-ul">
                {lista.map( item => 
                    <li key={item.id}>{item.descricao}
                    <button className="lista-categoria-remover" >Remover</button>
                    <Link className="lista-categoria-review" to={`/review-por-categoria/${item.id}`}  style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }>Listar reviews</Link>
                    </li>
                )}
                
            </ul>
            <div id="div-nova-categoria">
                <p>Não achou a categoria que queria? Nos diga qual gênero você deseja ver no blog!</p>
                <button style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} } id="botao-nova-categoria">Adicionar novo gênero</button>
            </div>
        </section>
    );
};

export default ListaCategorias;