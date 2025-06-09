import { execute } from "../database/sqlite.js";

async function Destaques() {
    let sql = ` SELECT empresa.* , 'N' as favorito 
                from DESTAQUE destaque join EMPRESA 
                empresa on (empresa.id_empresa = destaque.id_empresa) 
                order by destaque.ordem`; 

    return await execute(sql,[]);

}

export default { Destaques };  
