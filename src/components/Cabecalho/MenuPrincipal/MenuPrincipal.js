import React, {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


import "./MenuPrincipal.css";
import TemaContext from "../../../Contexts/TemaContext";
import pegarCategorias from "../../../utils/pegarCategorias";



const MenuPrincipal = () => {

    const tema = useContext(TemaContext);
    const [categorias, setCategorias] = useState([]);
    const [menuAberto, setMenuAberto] = useState(true);
   

   

    const TemaLi = styled.li`
        &:hover {
            background: ${tema.corTemaEscuro};
    }
    `

    const TemaNav = styled.nav`
  
    @media screen and (max-width: 720px) {
        
        display: ${({display}) => display ? display : "flex"  };

    }
              
    `
    


    useEffect( ()=> {
        pegarCategorias(setCategorias);
    }, []);

    

    return (
        <>
        
        <TemaNav id="nav-menu-principal"  display={menuAberto ? "none" : ""} >
        <ul className="ul-lista-menu-principal" style={ { backgroundColor: tema.corFundoTema} }>
            <TemaLi><Link className="lista-menu-principal" to="/lista-filmes">Filmes</Link></TemaLi>
            <TemaLi ><Link className="lista-menu-principal" to="/lista-review">Reviews</Link></TemaLi>
            <TemaLi  className="lista-menu-principal">
            <Link  className="lista-menu-categoria" to="/lista-categoria">Categorias</Link>

                <ul className="div-lista-categoria" style={ { backgroundColor: tema.corFundoTema} }>
                    
                    {categorias.map( item => {
                        return <TemaLi key={item.id}  ><Link className="lista-menu-principal"to={`/review-por-categoria/${item.id}`}>{item.descricao}</Link></TemaLi>
                    })}

                </ul>
            </TemaLi>
            <TemaLi><Link className="lista-menu-principal" to="/lista-novo-review">Novo review</Link></TemaLi>
        </ul>
        </TemaNav>  
        
             
         <div id ="div-cabecalho-hamburguer" style={ { backgroundColor: tema.corTemaEscuro} }  onClick={() => setMenuAberto(!menuAberto)}>
            <div style={ { backgroundColor: tema.corFundoTema} }></div>
            <div style={ { backgroundColor: tema.corFundoTema} }></div>
            <div style={ { backgroundColor: tema.corFundoTema} }></div>
         </div>
        </>
    );
};

export default MenuPrincipal;