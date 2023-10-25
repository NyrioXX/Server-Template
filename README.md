# Server-Template
Para facilitar as coisas!

Passo 1: Configuração do Ambiente.
1.1. Instale o Node.js e o npm no seu sistema.

Passo 2: Inicialização do Projeto.
2.1. Crie um diretório para o projeto.
2.2. Execute npm install para instalar as dependencias (atualmente já estão configurados no package.json: nodemon, express, jsonwebtoken, bcrypt, pg, date-fns, axios e qs).

Passo 3: Configuração do Banco de Dados.
3.1. Configure a conexão com o banco de dados PostgreSQL usando o pacote pg.
3.2. Crie as tabelas necessárias para armazenar os dados de usuários.

Passo 4: Criação de Rotas.
4.1. Crie rotas para registrar usuários, fazer login e proteger rotas com autenticação JWT.

Passo 5: Registro de Usuários.
5.1. Crie uma rota para o registro de novos usuários.
5.2. Use o pacote bcrypt para criptografar as senhas dos usuários antes de armazená-las no banco de dados.

Passo 6: Autenticação de Usuários.
6.1. Crie uma rota para o login de usuários.
6.2. Valide as credenciais dos usuários e gere um token JWT se as credenciais estiverem corretas.

Passo 8: Proteção de Rotas
8.1. Utilize middlewares para proteger as rotas que exigem autenticação.
8.2. Verifique o token JWT na solicitação e autorize ou negue o acesso com base na validade do token.

Passo 9: Teste a API
9.1. Teste todas as funcionalidades da API usando ferramentas como Postman ou Insomnia.
