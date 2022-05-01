const express = require("express") 
const app = express()
const port = 3000

const bd = require("./infra/bd.js")

const usuario = require("./controllers/usuario-controller.js")
const produtos = require("./controllers/produtos-controllers")


app.use(express.json())

usuario(app, bd)
tarefa(app, bd)


app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

