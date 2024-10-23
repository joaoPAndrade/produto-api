import { Produto } from "../entities/produto.js";

export class UpdateService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(id, {ID, Descricao, Preco, Estoque, Data}){
        const produtoEstadoAtual = await this.produtoRepository.getOneById(id);
        if(!produtoEstadoAtual) throw new Error("Produto não encontrado");
        const produto = new Produto({
            ID: id,
            Descricao: Descricao || produtoEstadoAtual.Descricao,
            Preco: Preco || produtoEstadoAtual.Preco,
            Estoque: Estoque || produtoEstadoAtual.Estoque,
            Data: Data || produtoEstadoAtual.Data,
        })
        const resposta = await this.produtoRepository.update(produto.toJSON());
        return resposta;
    }
}