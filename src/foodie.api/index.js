import express from "express";
import cors from "cors";
import router from "./routes.js"; // Importa as rotas do arquivo routes.js

const app = express();

app.use(express.json()); // habilita a aplicação para trabalhar com JSON
app.use(cors()); // habilita o CORS
app.use(router); // usa as rotas definidas no arquivo routes.js


app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001");
})