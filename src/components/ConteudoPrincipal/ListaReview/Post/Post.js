import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Post.css";
import image from "../../../../utils/imagem/trash.png";
import removerPostServiço from "../../../../utils/removerPostServiço";
import pegarCategoriaId from "../../../../utils/pegarCategoriaId";

import TemaContext from "../../../../Contexts/TemaContext";
// import { Toast, ToastBody, ToastHeader } from 'reactstrap'; 



const Post = ( {review}) => {


    const tema = useContext(TemaContext);

    const [postRemovido, setPostRemovido] = useState(false);
    const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
    // const [mensagem, setMensagem] = useState("");
    // const [mostrarMensagem, setMostrarMensagem] = useState("");

    useEffect( async () => {
        
        const categoria = await pegarCategoriaId(review.idCategoria);
        setCategoriaEscolhida(categoria.data.result.descricao);
        
    }, [] );


    const removerPost = async () => {
        
        const resultado = await removerPostServiço( review.id);
        

        if(resultado.sucesso ) {
            setPostRemovido(true);
            // setMensagem(resultado.mensagem);
            return false;
        }


    };

    // const showMensagem = () => {
 

    //    return setTimeout( () => {
    //         return (
    //             <h1>qualquer coisa</h1>
    //         )
    //     }, 10000)
        
    // }

    

    return (
        <>
            {postRemovido ? null : 
                <article style={ { backgroundColor: tema.corFundoTema} } className="p-post" >
                    <div id="p-div-principal">
                    <div className="p-titulo-botao">
                        <h3 className="p-titulo" >{review.titulo}</h3>
                        <button className="p-botao-remover" onClick={ () => removerPost()} style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }
                            >Remover <img className="p-remover"  src={image} alt="Botão de remover"/>
                        </button>
                    </div>
                    <p className="p-postado-em">Postado em: {review.dataPostagem}</p>

                    <div className="p-img-texto">
                        { review.imagem.includes("http") ? <img className="p-img" src={review.imagem} alt="cartaz do filme" title={review.titulo}/> 
                        : <img className="p-img" src="encurtador.com.br/anpV7" alt="cartaz do filme" title={review.titulo}/>
                        }
                        <div className="p-texto" >
                            <p><strong>Sinopse: </strong> {review.sinopse} </p>
                        </div>
                    </div>
                    <div className="p-categoria-botao">
                        <div className="p-categoria" >Categoria: {categoriaEscolhida}</div>
                        <Link to={`/detalhe-post/${review.id}`} className="p-botao" style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }>Continue lendo...</Link>
                    </div>
                    </div>
                </article>
            }
        </>
    );
};

export default Post;