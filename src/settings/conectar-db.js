//Configuração padrão do pg para uso do postgres
const { Pool } = require("pg");

const pool = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "sua_base_de_dados",
  password: "sua_senha",
  port: "numero-da-porta", //geralmente = 5432
});

module.exports = pool;
