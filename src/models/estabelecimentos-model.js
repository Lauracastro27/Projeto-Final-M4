var id = 0
class Estabelecimentos {
    constructor(nomeDono, CNPJ, nomeEstabelecimento, endereco, tipoDeComida, telefone, email, senha, cupom) {
        this.id = id++
        this.nomeDono = nomeDono
        this.CNPJ = CNPJ
        this.nomeEstabelecimento = nomeEstabelecimento
        this.endereco = endereco
        this.tipoDeComida = tipoDeComida
        this.telefone = telefone
        this.email = email
        this.senha = this.verificarSenha(senha)
        this.cupom = this.verificaCupom(cupom)
    }
    verificarSenha(senha) {
        if (senha.length <= 10) {
            return senha
        } else {
            throw new Error("Senha deve ter até 10 caracteres")
        }
    }
    verificaCupom(cupom) {
        if (cupom === 'sim' || cupom === 'não') {
            return cupom
        } else {
           throw new Error("Status de Cupom deve ser sim ou não")
                }
    }

}


module.exports = Estabelecimentos 