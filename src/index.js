const express = require("express") 
const sqlite3 = require("sqlite3") 
const app = express()
const bd = require('./infra/sqlite-db')
const port = process.ev.PORT || 3000

//Importa os controllers
const produtos = require("./controllers/produtos-controllers")
const cliente = require('./controllers/cliente-controller');
const entregadores = require('./controllers/Entregadores-controller')

const bd = require('./infra/clientes-sqlite-db');

app.use(express.json());

cliente(app, bd);
produtos(app, bd);
entregadores(app, bd);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})


