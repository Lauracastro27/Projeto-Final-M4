class ProdutosDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarProdutos() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM PRODUTOS`, (error, rows) => {
                if (error) {
                    reject("ERRO AO SELECIONAR BANCO")
                } else {
                    resolve({ "banco selecionado": rows })
                }
            })
        })
    }

    inserirNovoProduto(novoProduto) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO PRODUTOS (NOME, MARCA, INGREDIENTES, QTD, PRECO, VALIDADE) VALUES (?,?,?,?,?,?)`,
                [novoProduto.nome, novoProduto.marca, novoProduto.ingredientes, novoProduto.qtd, novoProduto.preco, novoProduto.ingredientes, novoProduto.validade],
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
    deletarProduto(produtoAntigo) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM PRODUTOS WHERE ID = ${produtoAntigo}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve("DELETADO COM SUCESSO!")
                }
            })
        })
    }
    atualizarProdutoPeloID(parametros) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE PRODUTOS SET NOME = ?, MARCA = ? , INGREDIENTES = ?, QTD = ?, PRECO = ?, VALIDADE = ? WHERE id = ?`, parametros, (error) => {
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

module.exports = ProdutosDAO;