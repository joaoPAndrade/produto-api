import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { CreateService } from "../../services/createProduto.js";

export class Create{
    constructor(props) {
        this.createService = new CreateService(props);
    }
    async handle(req, res){
        const{descricao, preco, estoque, data} = req.body;
        const novoProduto = await this.createService.execute(descricao, preco, estoque, data)
        return res.status(201).json(novoProduto);
    }
}