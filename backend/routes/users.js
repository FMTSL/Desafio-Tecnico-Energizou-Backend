//Configuração de Rotas!
import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers); //Rota para GET

router.post("/", addUser); //Rota para POST

router.put("/:idEmpresas", updateUser); //Rota para PUT

router.delete("/:idEmpresas", deleteUser); //Rota para DELETE

export default router; 