import React, { useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./ListaCategorias.css";

import TemaContext from "../../../Contexts/TemaContext";
import pegarCategorias from "../../../utils/pegarCategorias";
import removerCategoriaServico from "../../../utils/removerCategoriaServico";

const ListaCategorias = () => {

    const tema = useContext(TemaContext);

    
    const [categorias, setCategorias] = useState("");
      
    
    const removerCategoria =  async (id) => {
        
        const retornoServico = await removerCategoriaServico(id);
        
        if(retornoServico.sucesso) {
            
            const _lista = categorias.filter( item => {
                return item.id !== id;
            });

            setCategorias(_lista);
            return false;
        }
        
    }

    useEffect( () => {
        pegarCategorias(setCategorias)
    }, [categorias])


    
    return (
            <section style={ { backgroundColor: tema.corFundoTema} } id="lista-categorias">           
                    <h2 id="nova-categoria-titulo">Lista de gêneros</h2>
                    

                <ul id="lista-categoria-ul">
                    {categorias.length > 0 ? categorias.map( item => 
                        <li key={item.id}>{item.descricao}
                        <button className="lista-categoria-remover" onClick={ () => { removerCategoria(item.id) } }>Remover</button>
                        <Link className="lista-categoria-review" to={`/review-por-categoria/${item.id}`}  style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }>Listar reviews</Link>
                        </li>
                    ) : <p>Carregando categorias...</p>}
                    
                </ul>
                <div id="div-nova-categoria">
                    <p>Não achou a categoria que queria? Nos diga qual gênero você deseja ver no blog!</p>
                    <Link to="/nova-categoria" style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} } id="botao-nova-categoria">Adicionar novo gênero</Link>
                </div>
            </section>
    );
};

export default ListaCategorias;