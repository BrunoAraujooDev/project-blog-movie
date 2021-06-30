import axios from "./instanciaAxios";


const removerCategoriaServico = async (id) => {

    try{

        const resposta = await axios.delete(`categoria/${id}`);
        
        return {
            "sucesso": true,
            "mensagem": "O post foi removido com sucesso."
        }

    } catch(error) {

        switch(error.response.status) {

            case 409:
                return {
                    "sucesso": false,
                    "mensagem": error.response.data.message
                };

            default: 
                return {
                    "sucesso": false,
                    "mensagem": "Houve algum erro no momento de remoção do post."
                }
        }
    }


};


export default removerCategoriaServico;