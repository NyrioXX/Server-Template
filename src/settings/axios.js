const axios = require("axios"); //instalado com NPM
const chaveApi = require("../security/chaveApi"); //Chave da api de terceiro que deseje conectar

//Criar a instancia axios

const instanciaAxios = axios.create({
  baseURL: "",
  headers: {
    authorization: `Bearer ${chaveApi}`, //chave api de terceiro
    "Content-type": "", //formato de dados enviado para a api
    "Api-Version": "",
  },
});

module.exports = instanciaAxios;
