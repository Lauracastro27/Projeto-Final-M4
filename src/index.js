//Não editar
const express = require("express") 
const sqlite3 = require("sqlite3") 
const app = express()
const bdSqlite = require('./infra/sqlite-db')
const port = 3000

//const bd = require("./infra/bd.js")
//Importa os controllers
const produtos = require("./controllers/produtos-controllers")
const cliente = require('./controllers/cliente-controller');


const bd = require('./infra/clientes-sqlite-db');

app.use(express.json());

cliente(app, bd);
produtos(app, bdSqlite)



app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

