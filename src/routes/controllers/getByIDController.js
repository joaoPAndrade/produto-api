import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { FinByIdService } from "../../services/findProdutoByID.js";

export class GetById{
    constructor(props) {
        this.finByIdService = new FinByIdService(props);
    }
    async handle(req, res){
        const { id } = req.params;
        const resposta = await this.finByIdService.execute(id);

        return res.json(resposta);
    }
}