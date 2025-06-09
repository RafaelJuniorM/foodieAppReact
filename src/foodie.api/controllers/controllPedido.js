// resposanvel por receber a requisições do cliente; 

// funçao para listar os pedidos
import servPedido from "../services/servPedido.js";

async function ListarPedidos(req, res) {
    try{
        // Simulando uma lista de categorias
        const meusPedidos = await servPedido.ListarPedidos();
        
        res.status(200).json(meusPedidos);
    }catch(error){
        console.error("Erro ao listar Meus Pedidos:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}    

async function ListarPedidoId(req, res) {
    try{
        const id_Pedido = req.params.id_pedido; // Obtendo o ID do pedido a partir dos parâmetros da rota
        const meuPedido = await servPedido.ListarPedidoId(id_Pedido);
        
        res.status(200).json(meuPedido);
    }catch(error){
        console.error("Erro ao listar Meus Pedidos:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}    


export default { ListarPedidos, ListarPedidoId };