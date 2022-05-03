

class Produtos{
    constructor(marca, nome, qtd, preco, ingredientes, validade){
     
        this.nome = nome;
        this.marca = marca;
        this.ingredientes = ingredientes;
        this.qtd = qtd;
        this.preco = preco;
        this.validade = validade;
    }

}
module.exports = Produtos;