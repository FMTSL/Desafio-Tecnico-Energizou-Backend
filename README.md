# Desafio Técnico - Energizou (Backend)
Desafio técnico para vaga de Desenvolvedor Fullstack na Energizou.

## Descrição do Projeto

- Projeto realizado para candidatura na empresa Energizou, no qual foi imposto a criação de um sistema de cadastro para clientes utilizando como tecnologias como Node.js para o Back-end e MySQL,para gerenciamento de banco de dados. Foi imposto a criação de dois repositórios no Github para dividir a parte do Back e Front-End. Para acessar a parte de Front-end, feita em React.js, clique [*Aqui*](https://github.com/FMTSL).

- *Foi criado um CRUD para cadastro de empresas com os seguintes campos: Nome do Cliente, senha, nome da empresa, CNPJ, CEP, endereço, número, telefone e e-mail.*

## Tecnologias

- `Node.js`
- `JavaScript`
- `MySQL`

## Execução

Foi realizada a instalação do `NPM` para que fosse gerenciado os pacotes do Node.js. 

No diretório do projeto, você execute o comando `npm start`, para que seja executado o código no modo de desenvolvimento.
- Acesse [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

Executa o aplicativo no modo de desenvolvimento.
Abra http://localhost:3000 para visualização do `JSON` em seu navegador.

A página é recarregada a cada alteração, graçar a implementação do `Nodemon`, um um utilitário que monitora as mudanças nos arquivos do seu projeto feito em Node.js, reiniciando seu servidor. 

## Modelo Entidade Relacionamento

- Utilizando o banco de dados relacional MySQL, crei um banco de dados no qual nomeei como `crud_empresas`, possuindo uma tabela nomeada de `empresas`. Nesta tabela, atribui os campos atendendo o que foi solicitado no desafio, tendo um total de dez campos, sendo eles: `idEmpresas`, `nomeCliente`, `senha`, `nomeEmpresa`, `cnpj`, `cep`, `endereco`, `numeroEndereco`, `telefone` e `email`, conforme ilustra a imagem do diagrama abaixo:

 <img src="https://user-images.githubusercontent.com/88333095/280485441-bab5266e-cbc7-4f43-b155-231908fe9f70.png"/>

 ## Conexão com o Banco de Dados

 - Para realizar a conexão da API RESTful com o MySQL, criei um arquivo `db.js` e informei as informação necessárias para acesso ao banco de dados, conforme código abaixo:
 
```javascript
  //Configuração do Banco de Dados
import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud_empresas"
});
```
## Rotas

- Foi criado uma pasta nomeada como `routes` para controlar as rotas do CRUD, dentro do arquvido chamado `users.js`.

```javascript
 //Configuração de Rotas!
 import express from "express";
 import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";
 
 const router = express.Router();
 
 router.get("/", getUsers); //Rota para GET
 
 router.post("/", addUser); //Rota para POST
 
 router.put("/:idEmpresas", updateUser); //Rota para PUT
 
 router.delete("/:idEmpresas", deleteUser); //Rota para DELETE
 
 export default router; 
```




