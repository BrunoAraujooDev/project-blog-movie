import axios from "./instanciaAxios";

const pegarCategoriaId =  id => axios.get(`categoria/${id}`);



export default pegarCategoriaId;