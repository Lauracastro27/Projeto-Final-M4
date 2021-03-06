class EstabelecimentosDAO {
    constructor(bd) {
        this.bd = bd;
    }
    Inserirestabelecimentos(novoestabelecimentos) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO ESTABELECIMENTOS (NOMEDONO, CNPJ, NOMEESTABELECIMENTO, ENDEREÇO, TIPODECOMIDA, TELEFONE, EMAIL, SENHA, CUPOM) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [novoestabelecimentos.nomeDono, novoestabelecimentos.CNPJ, novoestabelecimentos.nomeEstabelecimento, novoestabelecimentos.endereço, novoestabelecimentos.tipoDeComida, novoestabelecimentos.telefone, novoestabelecimentos.email, novoestabelecimentos.senha, novoestabelecimentos.cupom], (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve("NOVO ESTABELECIMENTO CADASTRADO COM SUCESSO!!")
                    }
                })
        })
    }
    ListarEstabelecimentos() {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM ESTABELECIMENTOS`, (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({ "ESTABELECIMENTOS CADASTRADOS NO BANCO DE DADOS": results })
                }
            })
        })
    }
    AtualizarEstabelecimentos(parametros) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE ESTABELECIMENTOS SET NOMEDONO = ?, CNPJ = ?, NOMEESTABELECIMENTO = ?, ENDEREÇO = ?, TIPODECOMIDA = ?, TELEFONE = ?, EMAIL = ?, SENHA = ?, CUPOM = ? WHERE ID = ?`, parametros, (error) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve("ESTABELECIMENTO ATUALIZADO COM SUCESSO")
                }
            })
        })
    }
    DeletarEstabelecimentos(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM ESTABELECIMENTOS WHERE ID = ${id}`, (error) => {
                if (error) {
                    reject(error)
                }
                else {
                    resolve("ESTABELECIMENTO DELETADO COM SUCESSO")
                }
            })
        })
    }
}

module.exports = EstabelecimentosDAO;