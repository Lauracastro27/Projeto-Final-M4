const Usuario = require("../models/usuario-model.js")
const UsuarioDAO = require("../DAO/usuario-dao.js")

//CRUD - CREATE/READ/UPDATE/DELETE
const usuario = (app, bd) => {
    const DAOUsuario = new UsuarioDAO(bd)
    //INSERE REGISTROS (CREATE)
    app.post('/usuario', (req,res) => {
        const body = req.body
        const novousuario = new Usuario(body.nome, body.email, body.senha)
        const data = async() => {
            try{
                const usuarios = await DAOUsuario.InserirUsuario(novousuario)
                res.send(usuarios)
            }
            catch(err){
                res.send(err)
            }
        }
        data()
    })

    //LÊ REGISTROS (READ)
    app.get('/usuario', (req,res) => {
        const data = async() => {
            try{
                const usuarios = await DAOUsuario.ListarUsuario()
                res.send(usuarios)
            }
            catch(err){
                res.send(err)
            }
        }
        data()
    })

    //ALTERA REGISTROS (UPDATE)
    app.put('/usuario/:id', (req,res) => {
        const id = req.params.id;
        const body = req.body;
        const parametros = [body.nome, body.email, body.senha, id]
        const data = async() => {
            try{
                const usuarios = await DAOUsuario.AtualizarUsuario(parametros)
                res.send(usuarios)
            }
            catch(err){
                res.send(err)
            }
        }
        data()
    })

    //DELETA REGISTROS (DELETE)
    app.delete('/usuario/:id', (req,res) => {
        const id = req.params.id;
        const data = async() => {
            try{
                const usuarios = await DAOUsuario.DeletarUsuario(id)
                res.send(usuarios)
            }
            catch(err){
                res.send(err)
            }
        }
        data()
    })
}

module.exports = usuario;