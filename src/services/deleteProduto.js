import { Produto } from "../entities/produto.js"

export class DeleteService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(id){
        const resposta = await this.produtoRepository.delete(id);
        return resposta;
    }
}