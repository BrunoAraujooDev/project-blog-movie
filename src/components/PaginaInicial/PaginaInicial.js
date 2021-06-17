import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";

import "./PaginaInicial.css";

import Cabecalho from "../Cabecalho/Cabecalho";
import ConteudoPrincipal from "../ConteudoPrincipal/ConteudoPrincipal";
import BarraLateral from "../BarraLateral/BarraLateral";
import Rodape from "../Rodape/Rodape";
import TemaContext from "../../Contexts/TemaContext";

const PaginaInicial = () => {

    const temaPadrao = {
        corFundoTema: "#6d2e46",
        corTemaEscuro: "#3a0f20",
        corTexto: "white"
    };

    

    const [tema, setTema] = useState(temaPadrao);


    const modificarTema = temaSelecionado => {
        
        switch(temaSelecionado) {

            default:
                setTema(temaPadrao);
                break;
             
            case "azul":
                setTema({
                    corFundoTema: "#006d77",
                    corTemaEscuro: "#013b41",
                    corTexto: "white"
                });
                break;
            
            case "verde": 
                setTema({
                    corFundoTema: "#40916c",
                    corTemaEscuro: "#236346",
                    corTexto: "white"
                });
                break;
        }
    };


    return (

        <TemaContext.Provider value={tema}>
        <BrowserRouter>
            <div id="box-pagina-inicial">

                <div id="cabecalho">
                    <Cabecalho />
                </div>

                <div id="container">
                    <ConteudoPrincipal />
                    <BarraLateral funcaoConfiguraTema={ modificarTema }/>
                </div>

                <div id="rodape">
                    <Rodape />
                </div>
                
            </div>
        </BrowserRouter>
        </TemaContext.Provider>
    );
};

export default PaginaInicial;