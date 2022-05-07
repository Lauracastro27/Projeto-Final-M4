const Estabelecimentos = require("../models/estabelecimentos-model")
const EstabelecimentosDAO = require("../Dao/estabelecimento-dao")

//CRUD - CREATE/READ/UPDATE/DELETE
const estabelecimentos = (app, bd) => {

    const DAOEstabelecimentos = new EstabelecimentosDAO(bd)

    //INSERE REGISTROS (CREATE)
    app.post('/estabelecimentos', (req, res) => {
        const body = req.body
        const novoestabelecimento = new Estabelecimentos(body.nomeDono, body.CNPJ, body.nomeEstabelecimento, body.endereco, body.tipoDeComida, body.telefone, body.email, body.senha, body.cupom)
        const data = async () => {
            try {
                const estabelecimento = await DAOEstabelecimentos.Inserirestabelecimentos(novoestabelecimento)
                res.json(estabelecimento)
            } catch (error) {
                res.json(error)
            }
        }
        data()
    })

    //LÊ REGISTROS (READ)
    app.get('/estabelecimentos', (req, res) => {
        const data = async () => {
            try {
                const estabelecimentos = await DAOEstabelecimentos.ListarEstabelecimentos()
                res.json(estabelecimentos)
            }
            catch (err) {
                res.json(err)
            }
        }
        data()
    })

    //ALTERA REGISTROS (UPDATE)
    app.put('/estabelecimentos/:id', (req, res) => {
        const id = req.params.id;
        const body = req.body;
        const parametros = [body.nomeDono, body.CNPJ, body.nomeEstabelecimento, body.endereco, body.tipoDeComida, body.telefone, body.email, body.senha, body.cupom, id]
        const data = async () => {
            try {
                const estabelecimentos = await DAOEstabelecimentos.AtualizarEstabelecimentos(parametros)
                res.send(estabelecimentos)
            }
            catch (err) {
                res.send(err)
            }
        }
        data()
    })

    //DELETA REGISTROS (DELETE)
    app.delete('/estabelecimentos/:id', (req, res) => {
        const id = req.params.id;
        const data = async () => {
            try {
                const estabelecimentos = await DAOEstabelecimentos.DeletarEstabelecimentos(id)
                res.send(estabelecimentos)
            }
            catch (err) {
                res.send(err)
            }
        }
        data()
    })
}

module.exports = estabelecimentos;