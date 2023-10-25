//As querys são modelos e devem ser adaptadas de acordo com a necessidade
//ESSE ARQUIVO SERVE PARA ARMAZENAR AS QUERYS SQL QUE SERAM USADAS NOS CONTROLADORES COM O INTUITO
//DE EVITAR A REPETIÇÃO DE ESCRITA DE QUERY BEM COM A CONSULTA E ALTERAÇÃO FUTURA, EVITANDO ERROS
//BASTA IMPORTAR A VARIAVEL PARA O ARQUIVO CONTROLADOR E APLICAR JUNTO COM O PG:
//EXEMPLO: pool.query(querySelecionar,id)

const querySelecionar =
  "SELECT 'o-que-encontrar' FROM 'nome-da-tabela' WHERE 'criterio-de-busca'";

const queryAdicionar =
  "INSERT INTO 'nome-da-tabela' ('nome-da-coluna') VALUES ('lista-de-valores')";

const queryAtualizar =
  "UPDATE 'nome-da-tabela' SET 'nome-da-coluna' = 'o que vai mudar WHERE 'criterio-de-selecao";

const queryDeletar = "DELETE FROM nome-da-tabela WHERE condicao-de-selecao;";

module.exports = {
  querySelecionar,
  queryAdicionar,
  queryAtualizar,
  queryDeletar,
};
