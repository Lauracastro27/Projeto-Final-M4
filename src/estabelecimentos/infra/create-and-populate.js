
//==== Estabelecimentos
const ESTABELECIMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTABELECIMENTOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOMEDONO" varchar(64),
    "CNPJ" varchar(64),
    "NOMEESTABELECIMENTO" varchar(64),
    "ENDEREÇO" varchar(64),
    "TIPODECOMIDA" varchar(64),
    "TELEFONE" varchar(64),
    "EMAIL" varchar(64),
    "SENHA" varchar(64),
    "CUPOM" varchar(64)
  );`

  const ADD_ESTABELECIMENTOS_DATA = ` INSERT INTO ESTABELECIMENTOS (ID, NOMEDONO, CNPJ, NOMEESTABELECIMENTO, ENDEREÇO, TIPODECOMIDA, TELEFONE, EMAIL, SENHA, CUPOM)
  VALUES 
      ('1', 'Maria Nakamoto', '60.636.102/0001-20', 'Pastelaria Maria', 'Rua Valdemar Martins, 204 SP', 'Pastel', '2262-4338', 'Maria.Pastel@gmail.com', '**********', 'não'),
      ('2', 'Vinícius Cavalcanti', '44.004.733/0001-70', 'Ardoise', 'Lago do Arouche,502 SP', 'Francês', '2477-8186', 'Francesres@gmail.com', '*******',  'sim'),
      ('3', 'Vitor Rocha', '96.467.322/0001-14', 'Mizú Maceió', ' Av. Menino Marcelo, 257 AL', 'Japonesa', '2673-6529', 'MizuMaceio@hotmail.com', '*******', 'sim'   )
  `;

function criaTabelaEtb() {
    db.run(ESTABELECIMENTOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de estabelecimentos");
    });
}

function populaTabelaUsr() {
    db.run(ADD_ESTABELECIMENTOS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize(() => {
    criaTabelaEtb();
    populaTabelaUsr();
});
