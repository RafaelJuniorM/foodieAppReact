/*  GET = Listar daods 
    POST = Inserir dados
    PUT = Alterar dados
    DELETE = Excluir dados
*/
import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllBanner from "./controllers/controllBanner.js";
import controllEmpresa from "./controllers/controllEmpresa.js";
import controllPedido from "./controllers/controllPedido.js";
import controllUsuario from "./controllers/controllUsuario.js";
const router = Router();

//criando uma rota Usuários
router.post("/usuarios/login", controllUsuario.Login);
router.post("/usuarios/cadastro", controllUsuario.Cadastro);
router.get("/usuarios/favoritos", controllUsuario.Favoritos);


router.get("/categorias", controllerCategoria.Listar);

router.get("/banners", controllBanner.Listar);

router.get("/empresas/destaques", controllEmpresa.Destaques);

// Pedidos
router.get("/pedidos", controllPedido.ListarPedidos);
router.get("/pedidos/:id_pedido", controllPedido.ListarPedidoId);
export default router;
