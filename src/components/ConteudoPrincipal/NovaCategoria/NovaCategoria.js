import React, { useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import "./NovaCategoria.css";
import TemaContext from "../../../Contexts/TemaContext";
import salvarNovaCategoria from "../../../utils/salvarNovaCategoria";
import { Toast, ToastBody, ToastHeader } from 'reactstrap'; 


const NovaCategoria = () => {

    const tema = useContext(TemaContext);

    const [categoria, setCategoria] = useState("");
    const [mensagem, setMensagem] = useState("");

    const history = useHistory();

    const salvarCategoria = evento => {

        evento.preventDefault();

        if(!categoria) {
            alert("Preencha com uma nova categoria!")
            return false;
        };

        const _categoria = {
            "descricao": categoria
        }

        salvarNovaCategoria(_categoria, setMensagem);

        setTimeout( () => {
            history.push("/lista-categoria");
        } , 2000)
    };

    return (
        <div id="nc-principal" style={ {backgroundColor: tema.corFundoTema} }>

            <h3>Nova Categoria</h3>

            {mensagem ? 
            <div className="lnr-mensagem p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Mensagem de cadastro
                    </ToastHeader>
                    <ToastBody>
                        {mensagem}
                    </ToastBody>
                </Toast>
            </div>
            : null}

            <form className="nc-campo" onSubmit={ evento => salvarCategoria(evento)}>
                <label id="nc-label">Nome da categoria:</label>
                <input id="nc-categoria" name="nc-categoria"  onChange= { event => setCategoria(event.target.value) }/>

                <button id="nc-form-salvar" style={ {backgroundColor: tema.corTemaEscuro, color: tema.corTexto} }>Salvar</button>
            </form>

            
      
        </div>
    );
};

export default NovaCategoria;