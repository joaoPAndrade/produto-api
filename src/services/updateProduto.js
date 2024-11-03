import { Produto } from "../entities/produto.js";

export class UpdateService{
    constructor(produtoRepo){
        this.produtoRepository = produtoRepo;
    };
    async execute(id, {_id, descricao, preco, estoque, data}){
        const produtoEstadoAtual = await this.produtoRepository.getOneById(id);
        if(!produtoEstadoAtual) throw new Error("Produto não encontrado");

        const produto = new Produto({
            id: id,
            descricao: descricao || produtoEstadoAtual.descricao,
            preco: preco || produtoEstadoAtual.preco,
            estoque: estoque || produtoEstadoAtual.estoque,
            data: data || produtoEstadoAtual.data,
        })
        const resposta = await this.produtoRepository.update(produto.toJSON());
        return resposta;
    }
}