const express = require("express");
const rotas = require("./src/routes/rotas");

const app = express();

app.use(express.json());

app.use(rotas);

app.listen("numero_da_porta", () => {
  console.log(`Servidor rodando na porta 'numero_da_porta'`);
});
