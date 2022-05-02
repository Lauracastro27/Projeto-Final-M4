const bd = require('../infra/sqlite-db')
const ProdutosDAO = require('../DAO/produtos-dao')
const Produtos = require('../models/produtos-models')

const produtos = (app, bd)=>{

const InstProdutoDAO = new ProdutosDAO(bd)

//mostrat todos os produtos registrados no bd
      app.get('/produtos',(req, res) => {
        const data = async() => {
            try{
                const produtos = await InstProdutoDAO.listarProdutos()
                res.status(200).send(produtos)
            }catch(error){
                res.send(error)
            }
        }
        data()
      })

      //inserir um novo produto no bd
      app.post('/produtos', (req, res) => {
        //pegar body e inserir as informações
            const body = req.body
            const NovoProduto = new Produtos(body.marca, body.nome, body.qtd,
            body.ingredientes, body.preco, body.validade)
            const data = async() => {
                try {
                  const Produtos = await InstProdutoDAO.inserirNovoProduto(NovoProduto)
                  res.send(Produtos)
                }catch{
                    res.send("erro")
                }
            }
            data()
        })

        //atualizar um produto a partir do ID solicitado no paramentro
        app.put('/produtos/:id', (req, res) => {
            const body = req.body;
            const id = req.params.id
            const parametros = [body.marca, body.nome, body.ingredientes, body.qtd, body.preco, body.validade, id]
            const data = async() => {
                try {
                    const produtos =  await InstProdutoDAO.atualizarProdutoPeloID(parametros)
                    res.send(produtos)
                }catch(err) {
                    res.send(err)
                }
               
            }
            data()    
        });   
    //deletar um produtor a partir do nome passado no paramentro
        app.delete('/produtos/:nome', (req, res)=> {
      
    })
        
    }


module.exports = produtos;