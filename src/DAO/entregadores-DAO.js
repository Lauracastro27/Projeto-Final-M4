class EntregadoresDAO {
    constructor(bd) {
        this.bd = bd
    }

    listarEntregadores() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM Entregadores', (error, rows) => {
                if (error) {
                    reject('ERRO AO SELECIONAR BANCO')
                } else {
                    resolve({ "banco selecionado": rows })
                }
            })
        })
    }

    listarEntregadoresID(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM Entregadores WHERE ID=${id}`, (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })

    }

    insereEntregadores(novoEntregador) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO Entregadores (NOME, CPF, TELEFONE, IDADE, LOCALIZAÇÃO, EMAIL, SENHA, MEIODETRANSPORTE) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                [novoEntregador.nome, novoEntregador.CPF, novoEntregador.telefone, novoEntregador.idade, novoEntregador.localização, novoEntregador.email, novoEntregador.senha, novoEntregador.meioDeTransporte],
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve("INSERIDO COM SUCESSO!")
                    }
                })
        })
    }

    alteraEntregador(parametro) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE Entregadores SET NOME = ?, CPF = ?, TELEFONE = ?, IDADE = ?, LOCALIZAÇÃO = ?, EMAIL = ?, SENHA = ?, MEIODETRANSPORTE = ? WHERE id = ?`, parametro, (error) => {
                if (error) {
                    console.log(error)
                    reject(error);
                } else {
                    resolve("ALTERADO COM SUCESSO!")
                }
            })
        })
    }

    deleteEntregadores(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM Entregadores WHERE ID = ${id}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve("DELETADO COM SUCESSO!")
                }
            })
        })
    }

}

module.exports = EntregadoresDAO