import React, {useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./ListaFilmes.css";

import TemaContext from "../../../Contexts/TemaContext";
import pegarPost from "../../../utils/pegarPost";

 

const ListaFilmes = () => {

    const tema = useContext(TemaContext);

    const [filme, setFilme] = useState("");

    useEffect( () => {
        pegarPost(setFilme)
    }, [])

    return (
        <section style={ { backgroundColor: tema.corFundoTema} } id="catalogo-filmes">
            {filme.length > 0 ? filme.map(item =>  <figure className="div-filme" key={item.id}><Link to={`/detalhe-post/${item.id}`}>
                <img className="imagem-cartaz"src={item.imagem} alt={`Cartaz do filme ${item.titulo}`}/>
                <figcaption className="titulo-filme">{item.titulo}</figcaption>
                </Link></figure> )  : <p>Carregando imagem...</p>}
            
        </section>
    );
};

export default ListaFilmes;