import { Produto } from "../entities/produto.js";

export class FinByIdService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(id){
        const resposta = await this.produtoRepository.getOneById(id);
        return resposta;
    }
}