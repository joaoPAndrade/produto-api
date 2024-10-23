import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { FindAllService } from "../../services/findAllProdutos.js";

export class GetAll{
    constructor(props) {
        this.findAllService = new FindAllService(props)
    }
    async handle(req, res){
        const resposta = await this.findAllService.execute();
        
        return res.json(resposta);
    }
}