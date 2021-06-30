import axios from "./instanciaAxios";


const salvarNovaCategoria = async (novaCategoria, setMensagem) => {

    try{

        const resposta = await axios.post("categoria", novaCategoria)
        setMensagem("Nova categoria cadastrada com sucesso");

    } catch(error) {

        if(error.response && error.response.status) {
            switch(error.response.status) {

                case 409:
                    setMensagem(error.response.data.message);
                    break;

                case 400:
                    setMensagem(error.response.data.message);
                    break;

                default:
                    setMensagem("Houve um problema na hora de salvar! Favor, tente novamente.");
                    break;
            }
        }
        setMensagem("Houve um problema de comunicação com o servidor!");
    }


};


export default salvarNovaCategoria;
