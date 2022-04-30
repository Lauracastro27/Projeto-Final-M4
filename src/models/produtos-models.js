var id = 0;

class Produtos{
    constructor(marca, nome, qtd, preco, ingredientes, validade){
        this.id = id++
        this.nome = nome;
        this.marca = marca;
        this.ingredientes = ingredientes;
        this.qtd = qtd;
        this.preco = preco;
        this.validade = validade;
    }

}
module.exports = Produtos;