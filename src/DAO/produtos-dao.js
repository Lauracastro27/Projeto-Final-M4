const bd = require("")

class ProdutosDAO {
    constructor(bd){
        this.bd = bd
    }

    listarProdutos(){
        return new Promise((resolve, reject)=>{
            this.bd.all(`SELECT * FROM PRODUTOS`, (error, rows) => {
                if(error){
                 reject("ERRO AO SELECIONAR BANCO")
                }else {
                  resolve({"banco selecionado": rows})
                }
              })
        })
    }

    inserirNovoProduto(novoProduto){
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO PRODUTOS (MARCA, NOME, QTD, PRECO, INGREDIENTES, VALIDADES) VALUES (?,?,?,?,?,?)`, 
            [novoProduto.marca, novoProduto.nome, novoProduto.qtd, novoProduto.preco,
             novoProduto.ingredientes, novoProduto.validade],
                 (error)=>{
                if(error){
                    reject(error)
                }else{
                   resolve("DEU CERTO INSERIR")
                }
            })
        })
    }
    deletarProduto(produtoAntigo){
       return new Promise((resolve, reject )=>{
            const nome = req.params.nome
            const indexProduto = bdSqliteSqlite.produtos.findIndex((produtos=>produtos.nome=== nome))
    
            if(indexProduto > -1){
                const produtoDeletado = bdSqliteSqlite.produtos.splice(indexProduto, 1)
                res.json({ "deletado": produtoDeletado, })
            } else {
                res.json({
                 "mensagem": `O produto com o "${nome}" não existe`,
                })
            }
     })
    
    }

}

module.exports = ProdutosDAO;