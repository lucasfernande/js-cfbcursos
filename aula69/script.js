class Figura {
    area() {
        return 0
    }
}

class Triangulo extends Figura {
    constructor(b, h) {
        super() // é necessário chamar o super antes de usar o this
        this.b = b
        this.h = h
    }

    area() { // sobrescreve a função area da classe pai
        return this.b * this.h / 2
    }
}

class Retangulo extends Figura {
    constructor(b, h) {
        super() 
        this.b = b
        this.h = h
    }

    area() {
        return this.b * this.h
    }
}

class Circulo extends Figura {
    constructor(raio) {
        super()
        this.raio = raio
    }

    area() {
        return 3.14 * this.raio ** 2
    }
}

// todas as classes são filhas de Figura, mas se comportam de forma diferente

let tri = new Triangulo(4, 2)
let ret = new Retangulo(5, 6)
let cir = new Circulo(5)

console.log(`Área do triângulo: ${tri.area()}m²`)
console.log(`Área do retângulo: ${ret.area()}m²`)
console.log(`Área do círculo: ${cir.area()}m²`)