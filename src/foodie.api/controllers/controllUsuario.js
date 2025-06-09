// responsavel por receber as requisições e chamar os serviços correspondentes
import servUsuario from "../services/servUsuario.js";

async function Favoritos(req, res){
    try{
        let id_usuario = 1; // pegar do token JWT
        // Simulando uma lista de categorias
        const favoritos = await servUsuario.Favoritos(id_usuario);
        
        res.status(200).json(favoritos);
    }catch(error){
        console.error("Erro ao listar Favoritos:", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

async function Login(req, res){
  const { email, senha } = req.body;

    res.status(200).json({
        id_usuario: 1,
        nome: "João da Silva",
        email: "joao@teste.com", 
    
    });
}

async function Cadastro(req, res){
    // recebe os dados do usuário 
    const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;
    res.status(201).json({
        id_usuario: 1,
        nome,
        email,
        senha,
        endereco,
        complemento, 
        bairro, 
        cidade, 
        uf, 
        cep
    });
}
export default{Favoritos, Login, Cadastro};