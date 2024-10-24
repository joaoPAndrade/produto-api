export class Produto{
    ID;
    Descricao;
    Preco;
    Estoque;
    Data;

    constructor(props) {
        this.ID = props.ID || null;
        this.Descricao = props.Descricao;
        this.Preco = props.Preco;
        this.Estoque = props.Estoque;
        this.Data = props.Data || new Date(); 
    }

    toJSON(){
        return{
            ID: this.ID,
            Descricao: this.Descricao,
            Preco: this.Preco,
            Estoque: this.Estoque,
            Data: this.Data
        }
    }
}