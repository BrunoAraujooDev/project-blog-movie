import React from "react";
import "./ListaReview.css";

import Post from "./Post/Post";

const ListaReview = ( {lista} ) => {
    return (
        <div>
            {lista.length > 0 ? lista.map(  item => {
                return <Post review={item} key={item.id}/> 
            }) : <p>Carregando...</p> } 

            {/* {categorias.length > 0 ? categorias.map(  item => {
                return <Post categorias={item}/> 
            }) : <p>Carregando...</p> }  */}
            {/* <Post idPost={lista.id}/>

            <Post idPost={102}/>
            <Post idPost={95}/> */}
        </div>
    );
};

export default ListaReview;