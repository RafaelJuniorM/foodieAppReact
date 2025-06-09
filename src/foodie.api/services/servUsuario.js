import repoFavoritos from "../repositories/repoFavoritos.js";

async function Favoritos(id_usuario){
    const favoritos = await repoFavoritos.Favoritos(id_usuario);
    
    return favoritos;
}
export default { Favoritos};