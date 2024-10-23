import { Produto } from "../entities/produto.js";


export class CreateService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(Descricao, Preco, Estoque){
        const novoProduto = new Produto({Descricao, Preco, Estoque});
        const resposta = await this.produtoRepository.create(novoProduto);
        const novoProdutoId = resposta.id;
        const buscaProduto = await this.produtoRepository.getOneById(novoProdutoId);
        return buscaProduto;
    }   
}


