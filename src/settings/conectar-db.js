//Configuração padrão do pg para uso do postgres
const { Pool } = require("pg");

const pool = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "sua_base_de_dados",
  password: "sua_senha",
  port: "sua-porta-de-entrada", //La ele 1000X ** 2
});

module.exports = pool;
