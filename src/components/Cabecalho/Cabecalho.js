import React, {useContext} from "react";
import "./Cabecalho.css";

import MenuPrincipal from "./MenuPrincipal/MenuPrincipal";
import logo from "../../assets/cinemao.png"
import TemaContext from "../../Contexts/TemaContext";




const Cabecalho = () => {

    const tema = useContext(TemaContext);

    


    return (
        <header style={ { backgroundColor: tema.corFundoTema} }>
            
            <img className="imagem-logo" src={logo} alt="Logo do blog" />
            
            
            <MenuPrincipal />

            

            <input className="campo-busca" type="text" placeholder="Busque aqui"/>

            

        </header>
    );
};

export default Cabecalho;