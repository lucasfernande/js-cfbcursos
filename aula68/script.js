const Nave = function(hp) {
    this.hp = hp
    this.municao = 100
}

const nave1 = new Nave(1000)
console.log(nave1)

// a propriedade prototype pode ser usada para adicionar métodos aos construtores existentes

Nave.prototype.vidas = 3 // adicionando o atributo vidas a classe Nave
Nave.prototype.atirar = function() { // adicionando o método atirar
    if (this.municao > 0) {
        this.municao--
    }
}

nave1.atirar()
nave1.atirar()
nave1.atirar()
nave1.atirar()

console.log(nave1.vidas)
console.log(nave1.municao)