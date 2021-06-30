import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import "./ConteudoPrincipal.css";

import ListaReview from "./ListaReview/ListaReview";
import ListaCategorias from "./ListaCategorias/ListaCategorias";
import ListaNovaReview from "./ListaNovaReview/ListaNovaReview";
import ListaFilmes from "./ListaFilmes/ListaFilmes";
import DetalhePost from "./DetalhePost/DetalhePost";
import ReviewPorCategoria from "./ReviewPorCategoria/ReviewPorCategoria";
import NovaCategoria from "./NovaCategoria/NovaCategoria";

const ConteudoPrincipal = () => {


    return (
        <main>

            <Switch>

                <Route exact path="/">
                    <Redirect to="/lista-filmes" />
                </Route>

                <Route path="/lista-filmes">
                    <ListaFilmes />
                </Route>

                <Route path="/lista-review">
                    <ListaReview />
                </Route>

                <Route path="/lista-categoria">
                    <ListaCategorias/>
                </Route>

                <Route path="/lista-novo-review">
                    <ListaNovaReview />
                </Route>

                <Route path="/detalhe-post/:id" component={DetalhePost} />
                <Route path="/review-por-categoria/:id" component={ReviewPorCategoria}/>

                <Route path="/nova-categoria" component={NovaCategoria}/>

            </Switch>

        </main>
    );
};

export default ConteudoPrincipal;