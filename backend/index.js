import express from "express";
import userRoutes from "./routes/users.js"
import cors from "cors";

const app = express();

app.use(express.json());//Para utilizar o modo json para post|put
app.use(cors());//Para evitar conflitos de acesso local

app.use("/", userRoutes);

app.listen(3000);//Porta de acesso