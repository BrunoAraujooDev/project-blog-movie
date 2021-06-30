import React, {useEffect, useState} from "react";
import "./ListaReview.css";

import Post from "./Post/Post";
import pegarPost from "../../../utils/pegarPost";

const ListaReview = () => {

    const [review, setReview] = useState([]);

    useEffect( ()=> {
        pegarPost(setReview);
    }, []);


    return (
        <div>
            {review.length > 0 ? review.map(  item => {
                return <Post review={item} key={item.id}/> 
            }) : <p>Carregando...</p> }
        </div>
    );
};

export default ListaReview;