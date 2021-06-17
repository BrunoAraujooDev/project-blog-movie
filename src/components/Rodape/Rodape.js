import React, {useContext} from "react";
import "./Rodape.css";

import logo from "../../assets/cinemao.png"
import TemaContext from "../../Contexts/TemaContext";

const Rodape = () => {

    const tema = useContext(TemaContext);

    return (
        <footer style={ { backgroundColor: tema.corFundoTema} } id="rodape-conteudo">
            
            <img className="imagem-logo" src={logo} alt="Logo do blog "/>
				<p>&copy; Copyright Blog Movies4Life - 2021</p>

        </footer>
    );
};

export default Rodape;