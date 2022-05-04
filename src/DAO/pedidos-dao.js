class PedidosDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarPedidos() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PEDIDOS`, (error, rows) => {
                if (error) {
                    reject("ERRO AO SELECIONAR BANCO")
                } else {
                    resolve({ "banco selecionado": rows })
                }
            })
        })
    }

    inserirNovoPedido(novoPedido) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO PEDIDOS (NOME_CLIENTE, NOME_ESTABELECIMENTO, NOME_PRODUTO, NOME_ENTREGADOR, QTD, PRECO) VALUES (?,?,?,?,?,?)`,
                [novoPedido.nomeCliente, novoPedido.nomeEstabelecimento, novoPedido.nomeProduto, novoPedido.nomeEntregador,
                novoPedido.qtd, novoPedido.preco],
                (error) => {
                    if (error) {
                        reject(error)
                        console.log(error);
                    } else {
                        resolve("DEU CERTO INSERIR")
                    }
                })
        })
    }
    deletarPedido(pedidoAntigo) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM PEDIDOS WHERE ID = ${pedidoAntigo}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve("DELETADO COM SUCESSO!")
                }
            })
        })
    }
    atualizarPedidoPeloID(parametros) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE PEDIDOS SET NOME = ?, MARCA = ? , INGREDIENTES = ?, QTD = ?, PRECO = ?, VALIDADE = ? WHERE id = ?`, parametros, (error) => {
                if (error) {
                    console.log(error)
                    reject(error);
                } else {
                    resolve("ALTERADO COM SUCESSO!")
                }
            })
        })
    }
}

module.exports = PedidosDAO;