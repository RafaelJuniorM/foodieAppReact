import { execute } from "../database/sqlite.js";

async function Listar() {
    let sql = "SELECT * FROM categoria order by ordem";

    return await execute(sql,[]);

}

export default { Listar };  
