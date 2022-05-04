class Clientedao {
    constructor(bd) {
        this.bd = bd;
    }

    ExbirClientes() {

        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM CLIENTES`, (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })


        })
    }

    inserirCliente(NovoCLiente) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO CLIENTES (NOME,IDADE,TEL,EMAIL,SENHA,ENDERECO,FAVORITO)VALUES (?,?,?,?,?,?,?)`,
                [NovoCLiente.nome, NovoCLiente.idade, NovoCLiente.tel, NovoCLiente.email, NovoCLiente.senha, NovoCLiente.endereco, NovoCLiente.favorito], (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('inserido com sucesso')
                    }
                })
        })
    }

    AlterarCliente(parametros) {
        return new Promise((resolve, reject) => {
            this.bd.run(`UPDATE CLIENTES SET NOME =?, IDADE =?,TEL=?,EMAIL=?,SENHA= ?,ENDERECO=?,FAVORITO=? where id= ?`, parametros, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Alterado com sucesso')
                }
            })
        })
    }
    DeletarCliente(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM CLIENTES WHERE ID = ${id}`, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Deletado com Sucesso')
                }
            })
        })
    }
}






module.exports = Clientedao;