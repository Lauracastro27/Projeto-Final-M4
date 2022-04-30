const bd = require("../infra/bd")
const Cliente = require("../models/cliente-model.js")

const cliente = (app) => {

    //CRUD - CREATE/READ/UPDATE/DELETE

    //INSERE REGISTROS (CREATE)
    app.post('/cliente', (req,res) => {

    try{
        const body = req.body
        const novocliente = new Cliente(body.nome, body.email, body.senha)
        bd.cliente.push(novocliente)
        res.json({"Novo cliente Cadastrado": novocliente})
    }
    catch (error){
        res.json({"message": error.message})
    }
    })

    //LÊ REGISTROS (READ)
    app.get('/cliente', (req,res) => {
        res.json(bd.cliente)
    })

    //ALTERA REGISTROS (UPDATE)
    app.put('/cliente', (req,res) => {
        res.send("Olá, mundo! Aqui é rota de cliente PUT")
    })

    //DELETA REGISTROS (DELETE)
    app.delete('/cliente', (req,res) => {
        res.send("Olá, mundo! Aqui é rota de usuário DELETE")
    })
}

module.exports = cliente;