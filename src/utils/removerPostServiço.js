import axios from "./instanciaAxios";

const removerPostServiço = async (id) => {

    try {
        const resposta = await axios.delete(`postagem/${id}`);
        
        return {
            "sucesso": true,
            "mensagem": "O post foi removido com sucesso."
        }

    } catch (erro) {

        switch(erro.response.status) {

            case 409:
                return {
                    "sucesso": false,
                    "mensagem": erro.response.data.message
                };

            default: 
                return {
                    "sucesso": false,
                    "mensagem": "Houve algum erro no momento de remoção do post."
                }
        }
    }

}

export default removerPostServiço;