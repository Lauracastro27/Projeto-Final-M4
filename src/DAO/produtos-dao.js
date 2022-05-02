
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
            this.bd.run(`INSERT INTO PRODUTOS (NOME, MARCA, INGREDIENTES, QTD, PRECO, VALIDADE) VALUES (?,?,?,?,?,?)`, 
            [novoProduto.marca, novoProduto.nome, novoProduto.qtd, novoProduto.preco,
             novoProduto.ingredientes, novoProduto.validade],
                 (error)=>{
                if(error){
                    reject(error)
                    console.log(error);
                }else{
                   resolve("DEU CERTO INSERIR")
                }
            })
        })
    }
    deletarProduto(produtoAntigo){
     
       }
       atualizarProdutoPeloID(parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE PRODUTOS SET MARCA = ?, NOME = ? , INGREDIENTES = ?, QTD = ?, PRECO = ?, VALIDADE = ? WHERE id = ?`, parametros ,(error)=>{
            if(error){
                console.log(error)
               reject(error);
            }else{
               resolve("ALTERADO COM SUCESSO!")
            }
        })
    })
 }
}
    



module.exports = ProdutosDAO;