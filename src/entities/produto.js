export class Produto{
    id;
    descricao;
    preco;
    estoque;
    data;

    constructor(props) {
        this.id = props.id || null;
        this.descricao = props.descricao;
        this.preco = props.preco;
        this.estoque = props.estoque;
        this.data = props.data || new Date(); 
    }

    toJSON(){
        return{
            id: this.id,
            descricao: this.descricao,
            preco: this.preco,
            estoque: this.estoque,
            data: this.data
        }
    }
}