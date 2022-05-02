//const bd = require("")
const Usuario = require("../models/usuario-model.js")

const usuario = (app) => {

    //CRUD - CREATE/READ/UPDATE/DELETE

    //INSERE REGISTROS (CREATE)
    app.post('/usuario', (req,res) => {

    try{
        const body = req.body
        const novousuario = new Usuario(body.nome, body.email, body.senha)
        bd.usuario.push(novousuario)
        res.json({"Novo Usuário Cadastrado": novousuario})
    }
    catch (error){
        res.json({"message": error.message})
    }
    })

    //LÊ REGISTROS (READ)
    app.get('/usuario', (req,res) => {
        res.json(bd.usuario)
    })

    //ALTERA REGISTROS (UPDATE)
    app.put('/usuario', (req,res) => {
        res.send("Olá, mundo! Aqui é rota de usuário PUT")
    })

    //DELETA REGISTROS (DELETE)
    app.delete('/usuario', (req,res) => {
        res.send("Olá, mundo! Aqui é rota de usuário DELETE")
    })
}

module.exports = usuario;