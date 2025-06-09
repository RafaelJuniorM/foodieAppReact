import repoEmpresas from "../repositories/repoEmpresas.js";

async function Destaques(){
    const empresas = await repoEmpresas.Destaques();
    
    return empresas
}

export default { Destaques };