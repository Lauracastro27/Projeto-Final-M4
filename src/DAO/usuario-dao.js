class UsuarioDAO{
    constructor(bd){
        this.bd = bd;
    }
    InserirUsuario(novousuario){
        return new Promise((resolve, reject) =>{
            this.bd.run(`INSERT INTO USUARIOS (ID, NOME, EMAIL, SENHA) VALUES(?,?,?,?)`, 
            [novousuario.id, novousuario.nome, novousuario.email, novousuario.senha],(error) => {
                if(error){
                    reject(error);
                }
                else{
                    resolve({"NOVO USUÁRIO CADASTRADO COM SUCESSO":novousuario});
                }
            })
        })
    }
    ListarUsuario(){
        return new Promise((resolve, reject) =>{
            this.bd.all(`SELECT * FROM USUARIOS`, (err, results) => {
                if(err){
                    reject(err)
                }
                else{
                    resolve({"USUÁRIOS CADASTRADOS NO BANCO DE DADOS": results})
                }
            })
        })
    }
    AtualizarUsuario(parametros){
        return new Promise((resolve, reject) =>{
            this.bd.run(`UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE ID = ?`, parametros,(error) => {
                if(error){
                    reject(error)
                }
                else{
                    resolve("USUARIO ATUALIZADO COM SUCESSO")
                }
            })
        })
    }
    DeletarUsuario(id){
        return new Promise((resolve, reject) =>{
            this.bd.run(`DELETE FROM USUARIOS WHERE ID = ${id}`,(error) => {
                if(error){
                    reject(error)
                }
                else{
                    resolve("USUARIO DELETADO COM SUCESSO")
                }
            })
        })
    }
}

module.exports = UsuarioDAO;