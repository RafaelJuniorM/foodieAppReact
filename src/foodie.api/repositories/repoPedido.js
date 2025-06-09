import { execute } from "../database/sqlite.js";

async function ListarPedidos() {
    let sql = ` SELECT pedido.*, empresa.nome, empresa.icone from PEDIDO pedido
                JOIN EMPRESA empresa ON (empresa.id_empresa = pedido.id_empresa) 
                order by pedido.id_pedido DESC
                `; 
    const pedidos = await execute(sql,[]);
    return pedidos;

}


async function ListarPedidoId(id_pedido) {
    let sql = ` SELECT pedido.*, empresa.nome, empresa.icone from PEDIDO pedido
                JOIN EMPRESA empresa ON (empresa.id_empresa = pedido.id_empresa) 
                WHERE pedido.id_pedido = ?
                order by pedido.id_pedido DESC
                `; 
    
    let sqlItens = `    SELECT pedido_item.*, produto.nome, produto.icone, produto.descricao 
                        from PEDIDO_ITEM pedido_item
                        JOIN PRODUTO produto ON (produto.id_produto = pedido_item.id_produto)
                        WHERE pedido_item.id_pedido = ?
                        order by pedido_item.id_item 
                        `;
                
    
    const pedido = await execute(sql,[id_pedido]);
    const itens = await execute(sqlItens,[id_pedido]);

    pedido[0].itens = itens;

    return pedido[0];

}

export default { ListarPedidos, ListarPedidoId };  
