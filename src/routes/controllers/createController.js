import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { CreateService } from "../../services/createProduto.js";

export class Create{
    constructor(props) {
        this.createService = new CreateService(props);
    }
    async handle(req, res){
        const{Descricao, Preco, Estoque} = req.body;
        const novoProduto = await this.createService.execute(Descricao, Preco, Estoque)
        return res.status(201).json(novoProduto);
    }
}