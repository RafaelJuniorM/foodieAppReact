// responsavel por receber as requisições e chamar os serviços correspondentes
import servicesCategoria from '../services/categoria.js';

async function Listar(req, res){
    try{
        // Simulando uma lista de categorias
        const categorias = await servicesCategoria.Listar();
        
        res.status(200).json(categorias);
    }catch(error){
        console.error("Erro ao listar categorias:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

export default{Listar}