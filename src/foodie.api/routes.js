/*  GET = Listar daods 
    POST = Inserir dados
    PUT = Alterar dados
    DELETE = Excluir dados
*/
import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllBanner from "./controllers/controllBanner.js";

const router = Router();

//criando uma rota Usuários
router.post("/usuarios/login", (req, res) => {
    
    const { email, senha } = req.body;

    res.status(200).json({
        id_usuario: 1,
        nome: "João da Silva",
        email: "joao@teste.com", 
    
    });
});


// POST = Inserir dados no servidor
router.post("/usuarios", (req, res) => {
    // recebe os dados do usuário 
    const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;
    res.status(201).json({
        id_usuario: 1,
        nome,
        email,
        senha,
        endereco,
        complemento, 
        bairro, 
        cidade, 
        uf, 
        cep
    });
})


router.get("/restaurantes", (req, res) => {
    /* Simulando uma lista de restaurantes
    const restaurantes = [
        { id: 1, nome: "Restaurante A", endereco: "Rua A, 123" },
        { id: 2, nome: "Restaurante B", endereco: "Rua B, 456" },
        { id: 3, nome: "Restaurante C", endereco: "Rua C, 789" }
    ];
    */
   const busca = req.query.busca;

    res.json({messagem: "nenhum restaurante encontrado" + busca});
});

router.get("/categorias", controllerCategoria.Listar);

router.get("/banners", controllBanner.Listar);
export default router;