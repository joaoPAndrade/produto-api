import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { UpdateService } from "../../services/updateProduto.js";

export class Update{
    constructor(props) {
        this.updateService = new UpdateService(props);
    }
    async handle(req, res){
        const {ID, Descricao, Preco, Estoque, Data} = req.body;
        const id = req.params;
        const Id = id.id;
        const produtoAtualizado = await this.updateService.execute(Id,{ID, Descricao, Preco, Estoque, Data});
        return res.status(201).json(produtoAtualizado);
    }
}