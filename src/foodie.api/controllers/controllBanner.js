// responsavel por receber as requisições e chamar os serviços correspondentes
import servBanner from "../services/servBanner.js";

async function Listar(req, res){
    try{
        // Simulando uma lista de categorias
        const banners = await servBanner.Listar();
        
        res.status(200).json(banners);
    }catch(error){
        console.error("Erro ao listar banners:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

export default{Listar}