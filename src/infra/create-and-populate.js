const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

// Produtos
const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "MARCA" varchar(64),
    "INGREDIENTES" varchar(64),
    "QTD" varchar(64),
    "PRECO" varchar(64),
    "VALIDADE" varchar(64)
  );`;

//Adicionar produtos na tabela
const ADD_PRODUTOS_DATA = `
INSERT INTO PRODUTOS (ID, MARCA, NOME, INGREDIENTES, QTD, PRECO, VALIDADE)
VALUES 
`;
function populaTabelaPrd() {
    db.run(ADD_PRODUTOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    });
}

function criaTabelaPrd() {
    db.run(PRODUTOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de produtos");
    });
}

// Clientes
const CLIENTES_SCHEMA = ` 
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "IDADE" varchar(64),
    "TEL" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "ENDERECO" varchar(64),
    "FAVORITO" varchar(64)
  );`

const ADD_CLIENTES_DATA = ` INSERT INTO CLIENTES (ID, NOME,IDADE,TEL EMAIL, SENHA ,ENDERECO, FAVORITO)
VALUES 
    (1, 'Eugênio Oliveira', 18,88775544,'eugenio.oliveira@bol.com.br', '**','rua 2','pizza'),
    (2, 'Olívia Ribeiro',20,39566547, 'olivia.ribeiro@gmail.com', '**','rua dos bobos','pamonha'),
    (3, 'Mirtes Faria Lima',50,39622547, 'mirtes_fl@yahoo.com', '**','macapa','pastel')
`

function criaTabelaCli() {
    db.run(CLIENTES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de usuários");
    });
}


function populaTabelaCli() {
    db.run(ADD_CLIENTES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize(() => {
    criaTabelaCli();
    populaTabelaCli();
    criaTabelaPrd();
    populaTabelaPrd();
});