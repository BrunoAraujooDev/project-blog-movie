import axios from "./instanciaAxios";

const salvarNovaReview = async (novoPost, setMensagem) => {

    try{

        const resposta = await axios.post("postagem", novoPost)
        setMensagem("A nova review foi adicionada com sucesso.");

    } catch(error) {

        console.log(error.response);

        switch(error.response.status) {

            case 409:
                setMensagem(error.response.data.message);
                break;

            case 400:
                setMensagem(error.response.data.message);
                break;

            default:
                setMensagem("Houve um problema na hora de salvar! Favor, tente novamente.")
        };
    }


};


export default salvarNovaReview;
