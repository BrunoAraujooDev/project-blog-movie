import axios from "./instanciaAxios";

const pegarCategorias = async (configuraState) => {

    try {
        const resposta = await axios.get("categoria");

        const _listacategorias = resposta.data.categorias;

        _listacategorias.sort( (a,b) => {
            return (a.descricao > b.descricao) ? 1 : -1
         })

        configuraState(_listacategorias); 
    } catch(erro) {
        console.log(`O erro ocorrido foi ${erro.message}.`)
    }

    

    
};

export default pegarCategorias;
        
    // const _listacategorias = [
    //     {
    //         "id": 1,
    //         "descricao": "Ação"
    //     },
    //     {
    //         "id": 2,
    //         "descricao": "Aventura"
    //     },
    //     {
    //         "id": 3,
    //         "descricao": "Comédia"
    //     },
    //     {
    //         "id": 4,
    //         "descricao": "Drama"
    //     },
    //     {
    //         "id": 5,
    //         "descricao": "Romance"
    //     },
    //     {
    //         "id": 6,
    //         "descricao": "Suspense"
    //     },
    //     {
    //         "id": 7,
    //         "descricao": "Terror"
    //     },
        
    // ];
    

