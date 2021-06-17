import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "./Post.css";

import TemaContext from "../../../../Contexts/TemaContext";



const Post = ( {review}) => {

    

    const tema = useContext(TemaContext);

    return (
        <article style={ { backgroundColor: tema.corFundoTema} } className="p-post" >
            <div id="p-div-principal">
            <h3 className="p-titulo" >{review.Titulo}</h3>
            <p className="p-postado-em">Postado em: {review.dataPostagem}</p>

            <div className="p-img-texto">
                <img className="p-img" src={review.imagem} alt="cartaz do filme" />
                <div className="p-texto" >
                    <p><strong>Sinopse: </strong> {review.Sinopse} </p>
                </div>
            </div>
            <div className="p-categoria-botao" >
                <div className="p-categoria" >Categoria: {review.idCategoria}</div>
                <Link to={`/detalhe-post/${review.id}`} className="p-botao" style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }>Continue lendo...</Link>
            </div>
            </div>
        </article>
    );
};

export default Post;