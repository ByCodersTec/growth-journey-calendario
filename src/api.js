import axios from "axios";

const api = axios.create({
    baseURL: 'https://bycoders-agendei.herokuapp.com/eventos/lista',
})

export default api;
