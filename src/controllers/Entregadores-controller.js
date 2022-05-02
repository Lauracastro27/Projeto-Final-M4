const bd = require('../infra/Entregadorsqlite')
const Entregadores = require('../models/entregadores-models')
const EntregadoresDAO = require('../DAO/entregadores-DAO')


const entregador = (app, bd) => {

    const instEntregadoresDAO = new EntregadoresDAO(bd)

    app.post('/entregadores', async (req, res) => {
        try {
            const body = req.body
            const post = await instEntregadoresDAO.insereEntregadores(req.body)
            res.json(post)
        } catch (error) {
            res.json(error)
        }
    })

    app.get('/entregadores', async (req, res) => {
        try {
            const entregadores = await instEntregadoresDAO.listarEntregadores()
            res.status(200).json(entregadores)
        } catch (error) {
            res.json(error)
        }
    })

    app.get('/entregadores/:id', async (req, res) => {
        try {
            const entregador = await instEntregadoresDAO.listarEntregadoresID(req.params.id);
            res.send(entregador)
        } catch (error) {
            res.send(error)
        }
    })

    app.put('/entregadores/:id', async (req, res) => {
        const body = req.body;
        const id = req.params.id
        const parametros = [body.nome, body.CPF, body.telefone, body.idade, body.localizacao, body.email, body.senha, body.meioDeTransporte, id]
        try {
            const entregador = await instEntregadoresDAO.alteraEntregador(parametros)
            res.send(entregador)
        } catch (error) {
            res.send(error)
        }
    })

     app.delete('/entregadores/:id', async (req, res) => {
         try {
             const entregador = await instEntregadoresDAO.deleteEntregadores(req.params.id)
             res.send(entregador)
         } catch (error) {
             res.send(error)
        }
      })
}


module.exports = entregador