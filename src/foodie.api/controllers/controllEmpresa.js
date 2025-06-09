// responsavel por receber as requisições e chamar os serviços correspondentes
import servEmpresa from "../services/servEmpresa.js";

async function Destaques(req, res){
    try{
        // Simulando uma lista de categorias
        const empresas = await servEmpresa.Destaques();
        
        res.status(200).json(empresas);
    }catch(error){
        console.error("Erro ao listar destaques:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

export default{Destaques}