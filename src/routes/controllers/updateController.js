import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { UpdateService } from "../../services/updateProduto.js";

export class Update{
    constructor(props) {
        this.updateService = new UpdateService(props);
    }
    async handle(req, res){
        const {id, descricao, preco, estoque, data} = req.body;
        const _id = req.params;
        const Id = _id.id;
        const produtoAtualizado = await this.updateService.execute(Id,{id, descricao, preco, estoque, data});
        return res.status(201).json(produtoAtualizado);
    }
}