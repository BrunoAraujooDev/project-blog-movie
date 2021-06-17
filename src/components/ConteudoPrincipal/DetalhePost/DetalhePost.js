import React, {useContext} from "react";
import "./DetalhePost.css";
import {useParams} from "react-router-dom";
import TemaContext from "../../../Contexts/TemaContext";



const DetalhePost = () => {

    const { id } = useParams();

    const tema = useContext(TemaContext);

    return (
    <div className="detalhe-post" style={ {backgroundColor: tema.corFundoTema} }>
        <h3>ksapospoapaokpoakpodkpo</h3>

        <p>Id selecionado: {id}</p>
    </div>

)};

export default DetalhePost;