import React, {useContext, useEffect, useState} from "react";
import "./ReviewPorCategoria.css";
import {useParams} from "react-router-dom";
import TemaContext from "../../../Contexts/TemaContext"
import pegarPost from "../../../utils/pegarPost";



const ReviewPorCategoria = () => {

    const { id } = useParams();

    const tema = useContext(TemaContext);

    const [post, setPost] = useState([]);

    const [postFiltrado, setPostFiltrado] = useState([]);

    useEffect( () => {
        pegarPost(setPost);
    } ,[] );

    useEffect( () => {
        if(post.length > 0) {
       const _postFiltrado = post.filter( item => item.idCategoria === parseInt(id) );
        setPostFiltrado(_postFiltrado);
        }
    }, [post, id]);

    return (
    <div className="detalhe-post" style={ {backgroundColor: tema.corFundoTema} }>

        <h3>Review por categoria</h3>

        <p>Id selecionado: {id}</p>

        <div>
            {postFiltrado.map( post => <p>{post.descricao}</p>)}
        </div>

    </div>

)};

export default ReviewPorCategoria;