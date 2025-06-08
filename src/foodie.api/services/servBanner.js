import repoBanner from "../repositories/repoBanner.js";

async function Listar(){
    const banners = await repoBanner.Listar();
    
    return banners
}

export default { Listar };