const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

//======= Produtos
const PRODUTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "MARCA" varchar(64),
    "INGREDIENTES" varchar(64),
    "QTD" varchar(64),
    "PRECO" varchar(64),
    "VALIDADE" varchar(64)
  );`

function criaTabelaPrd() {
    db.run(PRODUTOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de produtos");
    });
}

//====== Clientes
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
`;

function criaTabelaCli() {
    db.run(CLIENTES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Clientes");
    });
}

function populaTabelaCli() {
    db.run(ADD_CLIENTES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de Clientes");
    });
}

//==== Entregadores
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
    );`

const ADD_ENTREGADORES_DATA = ` INSERT INTO Entregadores (ID, NOME, CPF, TELEFONE, IDADE, LOCALIZAÇÃO, EMAIL, SENHA, MEIODETRANSPORTE)
VALUES 
    ('1', 'Maya Fartaria', '864.827.910-00', '3987-5388', '27', 'BA', 'Maya2012far@bol.com.br', '**********', 'Carro'),
    ('2', 'Márcio Sanches', '018.075.760-19', '3356-8464', '38', 'MT', 'Marcio.Sanches@gmail.com', '**********', 'Moto'),
    ('3', 'Alan Muniz', '343.029.330-89', '2610-5423', '23', 'SP', 'Alan.Muniz@hotmail,com', '**********', 'Bicicleta')
`;

function criaTabelaEnt() {
    db.run(ENTREGADORES_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Entregadores");
    });
}

function populaTabelaEnt() {
    db.run(ADD_ENTREGADORES_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de Entregadores");
    });
}

    db.serialize(() => {
      criaTabelaPrd();
      criaTabelaCli();
      populaTabelaCli();
      criaTabelaEnt();
      populaTabelaEnt();
    });
