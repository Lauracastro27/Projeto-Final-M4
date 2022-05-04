class Pedidos {
    constructor(nomeCliente, nomeEstabelecimento, nomeProduto, nomeEntregador, qtd, preco) {

        this.nomeCliente = nomeCliente;
        this.nomeEstabelecimento = nomeEstabelecimento;
        this.nomeProduto = nomeProduto;
        this.nomeEntregador = nomeEntregador;
        this.qtd = qtd;
        this.preco = preco;
    }
}
module.exports = Pedidos;