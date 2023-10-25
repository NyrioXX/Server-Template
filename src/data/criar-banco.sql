CREATE DATABASE IF NOT EXISTS 'NOME-DO-BANCO-DE-DADOS';
-- Exemplo de dados da tabela
CREATE TABLE 'NOME-DA-TABELA' (
    -- segue a estrutura: nome da coluna, tipo de dado, constraints (pode ter mais de uma constraint)
    id serial primary key,
    nome text not null,
    email text not null unique,
    senha text not null,
    cpf char(11) REFERENCES documentos(cpf)
);