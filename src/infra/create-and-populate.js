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
   ('1', 'coca-cola', 'coca-cola250ml', 'agua,açucar,gás', '5', '5', '18/05/2023')
`;
function populaTabelaPrd() {
    db.run(ADD_PRODUTOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}

function criaTabelaPrd() {
    db.run(PRODUTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de produtos");
    });
}

db.serialize( ()=> {
    criaTabelaPrd();
    populaTabelaPrd();
});