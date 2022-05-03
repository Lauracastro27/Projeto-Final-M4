const express = require("express") ;
const app = express();
const port = 3000;


const cliente = require('./controllers/cliente-controller');


const bd = require('./infra/clientes-sqlite-db');

app.use(express.json());

cliente(app, bd);



app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

