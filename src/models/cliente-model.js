
var id = 0

class Cliente {
    constructor(nome,idade,tel, email, senha,endereco,favoritos) {
        this.id = id++
        this.nome = nome
        this.idade = idade
        this.tel = tel
        this.email = email
        this.senha = this.verificarSenha(senha)
        this.endereco = endereco 
        this.favoritos = favoritos
    }

    verificarSenha(senha) {
        if (senha.length <= 6) {
            return senha
        } else {
            throw new Error("Senha deve ter até 6 caracteres")
        }
    }

}

module.exports = Cliente 