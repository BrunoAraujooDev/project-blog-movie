import React, {useContext} from "react";
import "./ListaFilmes.css";

import TemaContext from "../../../Contexts/TemaContext";



 

const ListaFilmes = ({lista}) => {

    const tema = useContext(TemaContext);

    return (
        <section style={ { backgroundColor: tema.corFundoTema} } id="catalogo-filmes">
            {lista.length > 0 ? lista.map(item =>  <div className="div-filme" key={item.id}>
                <img className="imagem-cartaz"src={item.imagem} alt={`Cartaz do filme ${item.Titulo}`}/>
                <p className="titulo-filme">{item.Titulo}</p>
                </div> )  : <p>Carregando imagem...</p>}
            
            <div className="div-filme">
                <img className="imagem-cartaz" src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg" alt="Nome do filme"/>
                <p className="titulo-filme">O hobbit: a batalha dos cinco exércitos</p>
            </div>
            <div className="div-filme">
                <img className="imagem-cartaz" src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg" alt="Nome do filme"/>
                <p className="titulo-filme">O hobbit: a batalha dos cinco exércitos</p>
            </div>
            <div className="div-filme">
                <img className="imagem-cartaz" src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg" alt="Nome do filme"/>
                <p className="titulo-filme">O hobbit: a batalha dos cinco exércitos</p>
            </div>
            <div className="div-filme">
                <img className="imagem-cartaz" src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg" alt="Nome do filme"/>
                <p className="titulo-filme">O hobbit: a batalha dos cinco exércitos</p>
            </div>
            <div className="div-filme">
                <img className="imagem-cartaz" src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg" alt="Nome do filme"/>
                <p className="titulo-filme">O hobbit: a batalha dos cinco exércitos</p>
            </div>
            <div className="div-filme">
                <img className="imagem-cartaz" src="https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg" alt="Nome do filme"/>
                <p className="titulo-filme">O hobbit: a batalha dos cinco exércitos</p>
            </div>
            
        </section>
    );
};

export default ListaFilmes;