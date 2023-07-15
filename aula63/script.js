class Carro { // classe pai
    constructor(modelo, portas) {
        this.modelo = modelo
        this.portas = portas
        this.ligado = false
        this.cor = undefined
    }

    ligar = function() {
        this.ligado = true
    }

    desligar = function() {
        this.ligado = false
    }

    setCor = function(cor) {
        this.cor = cor
    }
}

// let c1 = new Carro('Corsa', 4)
// c1.setCor('Amarelo')
// console.log(c1)

class Militar extends Carro { // a classe filho vai herdar tudo da classe pai
    constructor(modelo, portas, blindagem, municao) {
        super(modelo, portas) // passando os parâmetros para o construtor da class pai
        this.blindagem = blindagem
        this.municao = municao
    }

    atirar = function() { // método exclusivo da classe filho
        if (this.municao > 0) {
            this.municao--
        }
    }
}

let m1 = new Militar('Tanque', 1, 100, 250)
m1.setCor('Verde')
m1.atirar()
m1.atirar()
m1.atirar()
console.log(m1) 