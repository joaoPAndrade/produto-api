import { Produto } from "../entities/produto.js";

export class FindAllService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(){
        const resposta = await this.produtoRepository.getAll();
        return resposta;
    }
}