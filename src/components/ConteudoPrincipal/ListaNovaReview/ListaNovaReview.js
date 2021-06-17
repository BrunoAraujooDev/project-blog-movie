import React, {useState, useContext} from "react";
import "./ListaNovaReview.css";
import TemaContext from "../../../Contexts/TemaContext";

const ListaNovaReview = () => {

    const tema = useContext(TemaContext);

    const [formulario, setFormulario] = useState({});

    const enviarFormulario = event => {
        
        const {name, value} = event.target;
        
        setFormulario({
        ...formulario,
        [name]: value
            
        })
    }

    const submitarFormulario = event => {
        
        event.preventDefault()

        if( !formulario.titulo || !formulario.idCategoria || !formulario.cartaz || !formulario.sinopse || !formulario.atores || !formulario.diretor || !formulario.lancamento || !formulario.nota || !formulario.descricao ) {
                alert("Por favor, preencha todos os campos!")
                return false;
        }

        const novoFormulario = {
            ...formulario,
            idCategoria: parseInt(formulario.idCategoria),
            dataPostagem: new Date().toLocaleDateString()
        }

        // salvarNovoReview(novoFormulario);

    }

        
                // titulo: "",
                // categoria: "",
                // cartaz: "",
                // sinopse: "",
                // atores: "",
                // diretor: "",
                // lancamento: "",
                // nota: "",
                // descricao: ""


    return (
        <div id="new-review-div" style={ {backgroundColor: tema.corFundoTema} }>
        <h2>Novo review</h2>

        <form   onSubmit={event => submitarFormulario(event)}>
            <div className="nr-class">
                <label>Título do filme</label>
                <input className="nr-input" value={formulario.titulo || ""} name="titulo" onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Escolha uma categoria</label>
                <select  value={formulario.idCategoria || ""} name="idCategoria" className="nr-input" onChange={ enviarFormulario }>
                    <option  defaultValue disabled >Selecione uma opção</option>
                    <option value={1}>Ação</option>
                    <option value={2}>Aventura</option>
                    <option value={3}>Comédia</option>
                    <option value={4}>Drama</option>
                    <option value={5}>Romance</option>
                    <option value={6}>Suspense</option>
                    <option value={7}>Terror</option>
                </select>
            </div>
            <div className="nr-class">
                <label>Cartaz do filme</label>
                <input className="nr-input" name="cartaz" value={formulario.cartaz || ""} onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Sinopse</label>
                <textarea value={formulario.sinopse || ""} name="sinopse" id="nr-area-sinopse" onChange={ enviarFormulario }>

                </textarea>
            </div>
            <div className="nr-class">
                <label>Principais atores</label>
                <input className="nr-input"  name="atores" value={formulario.atores || ""} onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Diretor</label>
                <input className="nr-input" name="diretor" value={formulario.diretor || ""} onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Data de lançamento</label>
                <input className="nr-input" name="lancamento" value={formulario.lancamento || ""} onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Nota</label>
                <input className="nr-input" name="nota" value={formulario.nota || ""} onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Análise do filme</label>
                <textarea value={formulario.descricao || ""}  name="descricao" id="nr-area-analise" onChange={ enviarFormulario }>

                </textarea>
            </div>
            <button type="submit" style={ { backgroundColor: tema.corTemaEscuro, color: tema.corTexto} } id="nr-botao">
                Salvar
            </button>
        </form>
        </div>
    );
};

export default ListaNovaReview;