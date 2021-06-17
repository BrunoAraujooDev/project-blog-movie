const pegarCategorias = configuraState => {
        
    const _listacategorias = [
        {
            "id": 1,
            "descricao": "Ação"
        },
        {
            "id": 2,
            "descricao": "Aventura"
        },
        {
            "id": 3,
            "descricao": "Comédia"
        },
        {
            "id": 4,
            "descricao": "Drama"
        },
        {
            "id": 5,
            "descricao": "Romance"
        },
        {
            "id": 6,
            "descricao": "Suspense"
        },
        {
            "id": 7,
            "descricao": "Terror"
        },
        
    ];
    configuraState(_listacategorias); 

    _listacategorias.sort( (a,b) => {
       return (a.descricao > b.descricao) ? 1 : -1
    })
};

export default pegarCategorias;