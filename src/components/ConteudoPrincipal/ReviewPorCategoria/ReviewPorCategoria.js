import React, {useContext, useEffect, useState} from "react";
import "./ReviewPorCategoria.css";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import TemaContext from "../../../Contexts/TemaContext"
import pegarPost from "../../../utils/pegarPost";
import pegarCategoriaId from "../../../utils/pegarCategoriaId";



const ReviewPorCategoria = () => {

    const { id } = useParams();

    const tema = useContext(TemaContext);

    const [post, setPost] = useState([]);

    const [postFiltrado, setPostFiltrado] = useState([]);

    const [categoria, setCategoria] = useState("");



    const nomeCategoria = async(id) => {
        const _categoria = await pegarCategoriaId(id);
        setCategoria(_categoria.data.result.descricao);
    }




    useEffect( () => {
        pegarPost(setPost);
    } ,[] );


    useEffect(  () => {
        nomeCategoria(id); 
       }, [id]);


    useEffect( () => {
        if(post.length > 0) {
       const _postFiltrado = post.filter( item => item.idCategoria === parseInt(id) );
        setPostFiltrado(_postFiltrado);
        pegarCategoriaId(_postFiltrado.idCategoria);
        };
        
    }, [post, id]);



    return (
    <div className="detalhe-post" style={ {backgroundColor: tema.corFundoTema} }>
        <div id ="dp-titulo-botao">
            <h3 id="rc-titulo-categoria">Review por categoria: {categoria}</h3>
            <Link id="botao-voltar" to={"/lista-categoria"} style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }>Voltar</Link>
        </div>
        
        {postFiltrado.length > 0 ? postFiltrado.map( post => 
        <figure className="div-filme">
            <Link to={`/detalhe-post/${post.id}`}>
                <img className="imagem-cartaz" src={post.imagem} alt={post.titulo}/>
                <figcaption className="titulo-filme">{post.titulo}</figcaption> 
            </Link>
        </figure>
        ) : <p>Lamento, mas nenhum filme foi encontrado para essa categoria... :(</p>}
        

    </div>

)};

export default ReviewPorCategoria;