import repoPedidos from "../repositories/repoPedido.js";

async function ListarPedidos(){
    const meusPedidos = await repoPedidos.ListarPedidos();
    
    return meusPedidos
}


async function ListarPedidoId(id_pedido){
    const meuPedido = await repoPedidos.ListarPedidoId(id_pedido);
    
    return meuPedido
}
export default { ListarPedidos, ListarPedidoId };