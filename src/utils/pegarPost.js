import axios from "./instanciaAxios";


const pegarPost = async (configuraState) => {

    try {
        const resposta = await axios.get("postagem");
        configuraState(resposta.data.postagens);
    } catch(erro) {
        console.log(`O erro ocorrido foi ${erro.data.message}.`);
    }
    
};

export default pegarPost;
        
    