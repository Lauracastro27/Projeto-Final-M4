const Cliente = require("../models/cliente-model")
const Clientedao = require('../DAO/cliente-DAO')


const cliente = (app, bd) => {
    const DAOcliente = new Clientedao(bd)
    //CRUD - CREATE/READ/UPDATE/DELETE 

    //INSERE REGISTROS (CREATE)
    app.post('/cliente', (req, res) => {
        const body = req.body;
        const ClienteDado = new Cliente(body.nome, body.idade, body.tel, body.email, body.senha, body.endereco, body.favorito)
        const data = async () => {
            try {
                const cliente = await DAOcliente.inserirCliente(ClienteDado)
                res.send(cliente)
            } catch (err) {
                res.send(err)
            }
        }
        data()
    })

    //LÊ REGISTROS (READ)
    app.get('/cliente', (req, res) => {
        const data = async () => {
            try {
                const cliente = await DAOcliente.ExbirClientes()
                res.send(cliente)
            } catch (err) {
                res.send(err)
            }
        }
        data()
    })

    //ALTERA REGISTROS (UPDATE)
    app.put('/cliente/:id', (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const parametros = [body.nome, body.idade, body.tel, body.email, body.senha, body.endereco, body.favorito, id]
        const data = async () => {
            try {
                const cliente = await DAOcliente.AlterarCliente(parametros)
                res.send(cliente)
            } catch (err) {
                res.send(err)
            }
        }
        data();
    })

    //DELETA REGISTROS (DELETE)
    app.delete('/cliente/:id', (req, res) => {
        const id = req.params.id
        const data = async () => {
            try {
                const cliente = await DAOcliente.DeletarCliente(id)
                res.send(cliente)
            } catch (err) {
                res.send(err)
            }
        }

        data()
    })
}

module.exports = cliente;