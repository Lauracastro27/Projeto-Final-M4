const PedidosDAO = require('../DAO/pedidos-dao')
const Pedidos = require('../models/pedidos-models')

const pedidos = (app, bd) => {

    const InstPedidoDAO = new PedidosDAO(bd)

    //mostrat todos os pedidos registrados no bd
    app.get('/pedidos', (req, res) => {
        const data = async () => {
            try {
                const pedidos = await InstPedidooDAO.listarPedidos()
                res.status(200).send(pedidos)
            } catch (error) {
                res.send(error)
            }
        }
        data()
    })

    //inserir um novo pedido no bd
    app.post('/pedidos', (req, res) => {
        //pegar body e inserir as informações
        const body = req.body
        const NovoPedido = new Pedido(body.nomeCliente, body.nomeEstabelecimento, body.nomeProduto,
            body.nomeEntregador, body.qtd, body.preco)
        const data = async () => {
            try {
                const pedidos = await InstPedidoDAO.inserirNovoPedido(NovoPedido)
                res.send(Pedido)
            } catch {
                res.send("erro")
            }
        }
        data()
    })

    //atualizar um pedido a partir do ID solicitado no paramentro
    app.put('/pedidos/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id
        const parametros = [body.nomeCliente, body.nomeEstabelecimento, body.nomeProduto,
            body.nomeEntregador, body.qtd, body.preco, id]
        const data = async () => {
            try {
                const pedidos = await InstPedidoDAO.atualizarPedidoPeloID(parametros)
                res.send(pedidos)
            } catch (err) {
                res.send(err)
            }

        }
        data()
    });
    //deletar um pedidor a partir do ID passado no paramentro
    app.delete('/pedidos/:id', (req, res) => {
        const data = async () => {
            try {
                const pedidos = await InstPedidoDAO.deletarPedido(req.params.id)
                res.send(pedido)
            } catch (err) {
                res.send(err)
            }

        }
        data()


    })

}


module.exports = pedidos;