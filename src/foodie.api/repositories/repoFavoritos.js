import { execute } from "../database/sqlite.js";

async function Favoritos(id_usuario) {
    let sql = ` SELECT favorito.*, empresa.nome, empresa.complemento, empresa.bairro, empresa.cidade, empresa.uf
                FROM usuario_favorito favorito
                JOIN EMPRESA  empresa ON (empresa.id_empresa = favorito.id_empresa)
                WHERE favorito.id_usuario = ?
                `;

    const favoritos = await execute(sql,[id_usuario]);
    return favoritos;
}

export default { Favoritos };  
