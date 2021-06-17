import React, { useEffect, useState} from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import "./ConteudoPrincipal.css";

import ListaReview from "./ListaReview/ListaReview";
import ListaCategorias from "./ListaCategorias/ListaCategorias";
import ListaNovaReview from "./ListaNovaReview/ListaNovaReview";
import ListaFilmes from "./ListaFilmes/ListaFilmes";
import DetalhePost from "./DetalhePost/DetalhePost";
import ReviewPorCategoria from "./ReviewPorCategoria/ReviewPorCategoria";

import pegarCategorias from "../../utils/pegarCategorias";
import pegarPost from "../../utils/pegarPost";

const ConteudoPrincipal = () => {

    const [categorias, setCategorias] = useState([]);
    const [review, setReview] = useState([]);

    useEffect( ()=> {
        pegarCategorias(setCategorias);
    }, []);

    useEffect( ()=> {
        pegarPost(setReview);
    }, []);

    return (
        <main>

            <Switch>

                <Route exact path="/">
                    <Redirect to="/lista-filmes" />
                </Route>

                <Route path="/lista-filmes">
                    <ListaFilmes lista={review}/>
                </Route>

                <Route path="/lista-review">
                    <ListaReview lista={review}/>
                </Route>

                <Route path="/lista-categoria">
                    <ListaCategorias lista={categorias}/>
                </Route>

                <Route path="/lista-novo-review">
                    <ListaNovaReview />
                </Route>

                <Route path="/detalhe-post/:id" component={DetalhePost}/>
                <Route path="/review-por-categoria/:id" component={ReviewPorCategoria}/>

            </Switch>

        </main>
    );
};

export default ConteudoPrincipal;