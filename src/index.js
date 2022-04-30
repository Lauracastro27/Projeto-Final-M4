const express = require("express") 
const app = express()
const port = 3000

const bd = require("./infra/bd.js")

const cliente= require("./controllers/cliente-controller.js")



app.use(express.json())

cliente(app, bd)



app.listen(port, () => {
    console.log("Servidor rodando na porta " + port)
})

