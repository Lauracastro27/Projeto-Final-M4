const express = require("express") 
const app = express()
const bdSqlite = require('./infra/sqlite-db')
const port = 3000

//const bd = require("./infra/bd.js")
//Importa os controllers
const usuario = require("./controllers/usuario-controller")
const produtos = require("./controllers/produtos-controllers")


app.use(express.json())

usuario(app)
produtos(app, bdSqlite)


app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

