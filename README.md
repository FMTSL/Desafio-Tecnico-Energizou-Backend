# Desafio Técnico - Energizou (Backend)
Desafio técnico para vaga de Desenvolvedor Fullstack na Energizou.

## Descrição do Projeto

- Projeto realizado para candidatura na empresa Energizou, no qual foi imposto a criação de um sistema de cadastro para clientes utilizando como tecnologias como Node.js para o Back-end e MySQL,para gerenciamento de banco de dados. Foi imposto a criação de dois repositórios no Github para dividir a parte do Back e Front-End. Para acessar a parte de Front-end, feita em React.js, clique [*Aqui*](https://github.com/FMTSL/Desafio-Tecnico-Energizou-Frontend).

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

## Index.js

- Arquivo principal responsável por renderizar o elemento principal da aplicação.

```javascript
 import express from "express";
 import userRoutes from "./routes/users.js"
 import cors from "cors";
 
 const app = express();
 
 app.use(express.json());//Para utilizar o modo json para post|put
 app.use(cors());//Para evitar conflitos de acesso local
 
 app.use("/", userRoutes);
 
 app.listen(3000);//Porta de acesso
```

## Controllers

- O arquivo `user.js` é o responsável por lidar com as requisições Http e dar um retorno de acordo com o método selecionado.

```javascript
 import { db } from "../db.js";

    //Método Get!
    export const getUsers = (_, res) =>{
        const q = "SELECT * FROM empresas";

        db.query(q, (err, data) => {
            if(err) return res.json(err);

            return res.status(200).json(data);
        });
    };

    //Método Post!
    export const addUser = (req, res) => {
        const q = "INSERT INTO empresas(`nomeCliente`, `senha`, `nomeEmpresa`, `cnpj`, `cep`, `endereco`, `numeroEndereco`, `telefone`, `email` ) VALUES(?)";
    
        const values = [
        req.body.nomeCliente,
        req.body.senha,
        req.body.nomeEmpresa,
        req.body.cnpj,
        req.body.cep,
        req.body.endereco,
        req.body.numeroEndereco,
        req.body.telefone,
        req.body.email,
        ];
    
        db.query(q, [values], (err) => {
        if (err) return res.json(err);
    
        return res.status(201).json("Cadastrado com Sucesso!!");
        });
    };
  

    //Método PUT!
    export const updateUser = (req, res) => {
    const q = "UPDATE empresas SET `nomeCliente` = ?, `senha` = ?, `nomeEmpresa` = ?, `cnpj` = ?, `cep` = ?, `endereco` = ?, `numeroEndereco` = ?, `telefone` = ?, `email` = ? WHERE `idEmpresas` = ?";

    const values = [
        req.body.nomeCliente,
        req.body.senha,
        req.body.nomeEmpresa,
        req.body.cnpj,
        req.body.cep,
        req.body.endereco,
        req.body.numeroEndereco,
        req.body.telefone,
        req.body.email,
    ];

    db.query(q, [...values, req.params.idEmpresas], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Atualizado com Sucesso!");
    });
    };

    //Método Delete!
    export const deleteUser = (req, res) => {
        const q = "DELETE FROM empresas WHERE `idEmpresas` = ?";
        
        db.query(q, [req.params.idEmpresas], (err) => {
            if (err) return res.json(err);
        
            return res.status(204).json("Deletado com Sucesso!");
        });
        };
```

## Insomnia

- Foi utilizado para desenvolvimento/teste o framework Open Source de API REST, Insomnia.

### Create - Método Post

![Create](https://github.com/FMTSL/Desafio-Tecnico-Energizou-Backend/assets/88333095/7438313c-c528-40d5-af08-3cad7b570396)

### Read - Método Get

![Read](https://github.com/FMTSL/Desafio-Tecnico-Energizou-Backend/assets/88333095/25912495-4590-4ee3-970a-52d71ef90fd6)

### Update - Método Put

![Delete](https://github.com/FMTSL/Desafio-Tecnico-Energizou-Backend/assets/88333095/1ec3e4f0-af3d-495c-a66b-617a25e62507)


![Update](https://github.com/FMTSL/Desafio-Tecnico-Energizou-Backend/assets/88333095/06150664-f8e2-4870-8fa9-a0dd5fb5a037)

### Delete - Método Delete
