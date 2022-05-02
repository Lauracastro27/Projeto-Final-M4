//Não editar
const express = require("express") 
const sqlite3 = require("sqlite3") 
const app = express()
const port = 3000

const bd = require("./infra/sqlite-db")

const usuario = require("./controllers/usuario-controller.js")

app.use(express.json())

usuario(app, bd)

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

