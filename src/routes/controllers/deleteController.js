import { ProdutoRepository } from "../../repositories/produtoRepository.js";
import { DeleteService } from "../../services/deleteProduto.js";

export class Delete{
    constructor(props) {
        this.deleteService = new DeleteService(props);
    }
    async handle(req, res){
        const { id } = req.params;
        const resposta = await this.deleteService.execute(id);
        return res.status(200).send(resposta);
    }
}