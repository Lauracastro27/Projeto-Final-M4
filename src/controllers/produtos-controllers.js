const bd = require('')
const ProdutosDAO = require('../DAO/produtos-dao')
const Produtos = require('../models/produtos-models')

const produtos = (app,bdSqlite)=>{

const InstProdutoDAO = new ProdutosDAO(bdSqlite)

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
            InstProdutoDAO.inserirNovoProduto(NovoProduto)
            .then((resposta) =>{
                res.status(200).json(resposta)
            }).catch((error)=>{
                res.json(error)
            })

        })

        //mostrar o produto utilizando o nome que foi passado no paramentro
        app.get('/produtos/:nome', (req, res) => {
            const nome = req.params.nome
            res.json({
                "mensagem": " por parametro",
                "parametro": nome,

            })
        })
        //mostrar somente o produto que foi solicitado no parametro utilizando a marca
        app.get('/produtos/:marca', (req, res) => {
            const marca = req.params.marca
            for (let i = 0; i <= bdSqliteSqlite.length; i++) {
                if (bdSqliteSqlite[i].marca == marca) {
                    return `o email encontrado e ${marca}`
                }
            }
        })

        //atualizar um produto a partir do nome solicitado no paramentro
        app.put('/produtos/:nome', (req, res) => {
        const nome = req.params.nome
        const body = req.body
        const indexProduto = bdSqliteSqlite.produtos.findIndex((produtos => produtos.nome === nome))

        try {
            if (indexProduto > -1) {
                const produtoAntigo = bdSqliteSqlite.produtos[indexProduto]
                const produtoAtualizado = new Produtos(
                    body.nome || produtoAntigo.nome,
                    body.marca || produtoAntigo.marca,
                    body.qtd || produtoAntigo.qtd,
                    body.ingredientes || produtoAntigo.ingredientes,
                    body.preco || produtoAntigo.preco,
                    body.validade || produtoAntigo.validade,
                    produtoAntigo.id,
                )
                const DadosProdutoAtualizado = bdSqliteSqlite.produtos.splice(indexProduto, 1, produtoAtualizado)
                res.json({"atualizado": DadosProdutoAtualizado,})
            } else {
                res.json({"mensagem": `Usuário com email "${nome}" não existe`,})
            }
        } catch (error) {
            res.json({ "mensagem": error.message,})
        }
    })

    //deletar um produtor a partir do nome passado no paramentro
        app.delete('/produtos/:nome', (req, res)=> {
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

module.exports = produtos;