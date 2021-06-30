import axios from "./instanciaAxios";


const pegarPostUnico = async (id) => {

    try {
        const resposta = await axios.get(`postagem/${id}`);
        
        return resposta.data.result;
    } catch(erro) {
        console.log(`O erro ocorrido foi ${erro.data.result.message}.`);
    }
    
};

export default pegarPostUnico;