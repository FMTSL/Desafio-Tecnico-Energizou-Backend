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