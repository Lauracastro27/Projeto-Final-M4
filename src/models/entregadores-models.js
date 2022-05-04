let id = 0;

class Entregadores {
    constructor(nome, CPF, telefone, idade, localização, email, senha, meioDeTransporte,) {
        this.id = id++
        this.nome = nome
        this.CPF = CPF
        this.telefone = telefone
        this.idade = this.validaIdade(idade)
        this.localização = localização
        this.email = email
        this.senha = this.validarsenha(senha)
        this.meioDeTransporte = this.mt(meioDeTransporte)
    }
    validarsenha(senha) {
        if (senha.length <= 10) {
            return senha;
        } else {
            throw new Error("Senha deve ter até 10 caracteres")
        }
    }
    validaIdade(idade) {
        if (idade >= 18) {
            return idade;
        } else {
            throw new Error("Entregador deve ser maior de 18 anos")
        }
    }

    mt(meioDeTransporte) {
        const meiosValidos = ["Carro", "Moto", "Bicicleta"]
        if (meiosValidos.indexOf(this.mt) > -1) {
            return meioDeTransporte
        } else {
            throw new Error("Seu meio de transporte deve ser Carro, Moto ou Bicicleta")
        }
    }
}

module.exports = Entregadores;