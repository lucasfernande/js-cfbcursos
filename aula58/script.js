class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    getNome() {
        return this.nome
    }

    getIdade() {
        return this.idade
    }

    setNome(nome) {
        this.nome = nome
    }

    setIdade(idade) {
        this.idade = idade
    }
}

let p = new Pessoa('Paulo', 28) // passando os parâmetros para o constructor

p.setNome('Pedro')
p.setIdade(30)

console.log(p.getNome())
console.log(p.getIdade())