const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/bdEntregadores.db');

const ENTREGADORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Entregadores" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CPF" varchar(64),
    "TELEFONE" varchar(64),
    "IDADE" varchar(64),
    "LOCALIZAÇÃO" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "MEIODETRANSPORTE" varchar(64)
    )`;

const ADD_ENTREGADORES_DATA = ` INSERT INTO Entregadores (ID, NOME, CPF, TELEFONE, IDADE, LOCALIZAÇÃO, EMAIL, SENHA, MEIODETRANSPORTE)
VALUES 
    ('1', 'Maya Fartaria', '864.827.910-00', '3987-5388', '27', 'BA', 'Maya2012far@bol.com.br', '**********', 'Carro'),
    ('2', 'Márcio Sanches', '018.075.760-19', '3356-8464', '38', 'MT', 'Marcio.Sanches@gmail.com', '**********', 'Moto'),
    ('3', 'Alan Muniz', '343.029.330-89', '2610-5423', '23', 'SP', 'Alan.Muniz@hotmail,com', '**********', 'Bicicleta')
`;

function criaTabelaUsr() {
    db.run(ENTREGADORES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaUsr() {
    db.run(ADD_ENTREGADORES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    });
}

db.serialize(() => {
    criaTabelaUsr();
    populaTabelaUsr();
});