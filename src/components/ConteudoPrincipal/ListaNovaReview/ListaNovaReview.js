import React, {useState, useContext, useEffect} from "react";
import {useHistory} from "react-router-dom";
import { Toast, ToastBody, ToastHeader } from 'reactstrap'; 


import "./ListaNovaReview.css";
import TemaContext from "../../../Contexts/TemaContext";
import salvarNovaReview from "../../../utils/salvarNovaReview";
import pegarCategorias from "../../../utils/pegarCategorias";


const ListaNovaReview = () => {

    const tema = useContext(TemaContext);

    const [formulario, setFormulario] = useState({});
    const [mensagem, setMensagem] = useState("");
    const [carrossel1, setCarrossel1] = useState("");
    const [carrossel2, setCarrossel2] = useState("");
    const [carrossel3, setCarrossel3] = useState("");
    const [categorias, setCategorias] = useState("");
    
    const history = useHistory();


    const enviarFormulario = event => {
        
        const {name, value} = event.target;
        
        setFormulario({
        ...formulario,
        [name]: value
            
        })
    };
    

    const OpcoesCategorias = () => {

        if(categorias.length > 0 ) {
            const listaCategorias = categorias.map((item) => {
                return (
                    <option value={item.id} key={item.id}>
                        {item.descricao}
                    </option>
                )
            });

            return listaCategorias;
        } else {
            return null;
        }
    }
    

    const submitarFormulario = event => {

        
        event.preventDefault()

        if( !formulario.titulo || !formulario.idCategoria || !formulario.imagem || !formulario.sinopse || !formulario.atoresPrincipais || !formulario.diretor || !formulario.lancamento || !formulario.nota || !formulario.descricao ) {
                alert("Por favor, preencha todos os campos!")
                return false;
        }

        const juntarCarrossel = [carrossel1, carrossel2, carrossel3];

        const novoFormulario = {
            ...formulario,
            imagemCarousel: juntarCarrossel,
            idCategoria: parseInt(formulario.idCategoria),
            dataPostagem: new Date().toLocaleDateString()
        }

        salvarNovaReview(novoFormulario, setMensagem);

        setFormulario("");
        setCarrossel1("");
        setCarrossel2("");
        setCarrossel3("");

        setTimeout( () => {
            history.push("/lista-review");
        } , 3000)

    }

    useEffect( () => {
        pegarCategorias(setCategorias);
    }, [])

    return (
        <div id="new-review-div" style={ {backgroundColor: tema.corFundoTema} }>
        <h2>Novo review</h2>
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

        <form   onSubmit={event => submitarFormulario(event)}>
            <div className="nr-class">
                <label>Título do filme</label>
                <input className="nr-input" value={formulario.titulo || ""} name="titulo" onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Escolha uma categoria</label>
                <select  value={formulario.idCategoria || ""} name="idCategoria" className="nr-input" onChange={ enviarFormulario }>
                    <option defaultValue disabled value="">Selecione uma opção</option>
                    <OpcoesCategorias />
                </select>
            </div>
            <div className="nr-class">
                <label>Cartaz do filme</label>
                <input className="nr-input" name="imagem" value={formulario.imagem || ""} onChange={ enviarFormulario }/>
            </div>
            <div className="nr-class">
                <label>Sinopse</label>
                <textarea value={formulario.sinopse || ""} name="sinopse" id="nr-area-sinopse" onChange={ enviarFormulario }>

                </textarea>
            </div>
            <div className="nr-class">
                <label>Principais atores</label>
                <input className="nr-input"  name="atoresPrincipais" value={formulario.atoresPrincipais || ""} onChange={ enviarFormulario }/>
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
                <label>Imagens extras</label>
                <input className="nr-input nr-input-carousel" name="imagemCarousel"  value={carrossel1 || ""} onChange={ event => setCarrossel1(event.target.value)  }/>
                <input className="nr-input nr-input-carousel" name="imagemCarousel2" value={carrossel2 || ""} onChange={ event => setCarrossel2(event.target.value) }/>
                <input className="nr-input nr-input-carousel" name="imagemCarousel3" value={carrossel3 || ""} onChange={ event => setCarrossel3(event.target.value) }/>
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