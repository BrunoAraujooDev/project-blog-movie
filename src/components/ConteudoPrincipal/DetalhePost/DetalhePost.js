import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";


import TemaContext from "../../../Contexts/TemaContext";
import pegarPostUnico from "../../../utils/pegarPostUnico";
import CarouselPage from "../../../utils/pegarCarrossel";
import pegarCategoriaId from "../../../utils/pegarCategoriaId";

import "./DetalhePost.css";


const DetalhePost = () => {

    const { id } = useParams();

    const tema = useContext(TemaContext);

    const [listaPost, setListaPost] = useState({});
    const [nomeCategoria, setNomeCategoria] = useState("");

    const _listaPost =  async () => { 
        const _listaCarrossel = await pegarPostUnico(id);
        setListaPost(_listaCarrossel)
        categoriaPorId(_listaCarrossel.idCategoria);
    };

    const categoriaPorId = async (listaPost) => {
        const categoria = await pegarCategoriaId(listaPost);
        setNomeCategoria(categoria.data.result.descricao);
    }
    

    useEffect(  () => {
         _listaPost(id); 
        }, [id]);

    return (

        <div className="detalhe-post" style={ {backgroundColor: tema.corFundoTema} }>

            
            <h2 id="dp-titulo">{listaPost.titulo}</h2>
            <div id="dp-div-info">
                <img src={listaPost.imagem} alt={listaPost.titulo} id="dp-imagem-principal"/>
                <div id="dp-info-gerais">
                    <p className="dp-p"><strong>Postado:</strong> {listaPost.dataPostagem} </p>
                    <p className="dp-p"><strong>Gênero:</strong> {nomeCategoria ? nomeCategoria : ""} </p>
                    <p className="dp-p"><strong>Principais atores:</strong> {listaPost.atoresPrincipais} </p>
                    <p className="dp-p"><strong>Diretor:</strong> {listaPost.diretor} </p>
                    <p className="dp-p"><strong>Lançamento:</strong> {listaPost.lançamento} </p>
                    <p className="dp-p"><strong>Sinopse:</strong> {listaPost.sinopse} </p>
                </div>
            </div>

            <h2 id="dp-titulo-analise">Análise do filme</h2>

            <p className="dp-p">{listaPost.descricao}</p>
            <p className="dp-p">{listaPost.descricao}</p>
            <p className="dp-p">{listaPost.descricao}</p>
            <p className="dp-p">{listaPost.descricao}</p>

         
            <div id="dp-div-carroussel" >
                <CarouselPage />
            </div>
    

            <p className="dp-p" id="dp-conclusao"> Conclusão</p>

            <p className="dp-p">{listaPost.descricao}</p>
            <p className="dp-p">{listaPost.descricao}</p>

            <p className="dp-nota-final dp-p"><strong>Nota: </strong>{listaPost.nota}</p>



        </div>
)};

export default DetalhePost;