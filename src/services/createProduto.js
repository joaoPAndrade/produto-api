import { Produto } from "../entities/produto.js";


export class CreateService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(descricao, preco, estoque, data){
        const novoProduto = new Produto({descricao: descricao, preco: preco, estoque: estoque, data: data});
        const resposta = await this.produtoRepository.create(novoProduto);
        const novoProdutoId = resposta.id;
        const buscaProduto = await this.produtoRepository.getOneById(novoProdutoId);
        return buscaProduto;
    }   
}


