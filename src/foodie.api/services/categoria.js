import repositorioCategoria from '../repositories/categoria.js';

async function Listar(){
    const categorias = await repositorioCategoria.Listar();
    
    return categorias
}

export default { Listar };