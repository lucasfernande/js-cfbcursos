class Carro {
    constructor(modelo, portas) {
        this.modelo = modelo
        this.portas = portas
    }

    getModelo = () => {
        return this.modelo
    }

    getPortas = () => {
        return this.portas
    }

    setModelo = (modelo) => {
        this.modelo = modelo
    }

    setPortas = (portas) => {
        this.portas = portas
    }
}

class Militar extends Carro {
    constructor(modelo, portas, blindagem, municao) {
        super(modelo, portas)
        this.blindagem = blindagem
        this.municao = municao
    }

    getBlindagem = () => {
        return this.blindagem
    }

    getMunicao = () => {
        return this.municao
    }

    setBlindagem = (blindagem) => {
        this.blindagem = blindagem
    }

    setMunicao = (municao) => {
        this.municao = municao
    }
}

function limparCampos() {
    campoModelo.value = ''
    campoModelo.focus()
    campoPortas.value = '0'
    campoBlindagem.value = '0'
    campoMunicao.value = '0'
}

function mostrarRegistros() {
    res.innerHTML = ''
    
    carros.map(c => {
        let div = document.createElement('div')
        if (c.constructor.name == 'Militar') {
            div.innerHTML = `<p>Modelo: ${c.getModelo()} - Portas: ${c.getPortas()} - Blindagem: ${c.getBlindagem()} - Munição: ${c.getMunicao()}</p>`
        } else {
            div.innerHTML = `<p>Modelo: ${c.getModelo()} - Portas: ${c.getPortas()}</p>`
        }
        res.appendChild(div)
    })
}

let campoModelo = document.querySelector('#modelo')
let campoPortas = document.querySelector('#portas')
let campoBlindagem = document.querySelector('#blindagem')
let campoMunicao = document.querySelector('#municao')
let normal = document.querySelector('#normal')
let militar = document.querySelector('#militar')
let res = document.querySelector('#res')

let opc = [...document.getElementsByName('opc')]
opc.map(e => {
    e.addEventListener('click', function() {
        blindagem.disabled = true
        municao.disabled = true

        if (this.id == 'militar') {
            blindagem.disabled = false
            municao.disabled = false
        }
    })
})

let carros = []
const btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', () => {
    let modelo = campoModelo.value
    let portas = campoPortas.value
    
    if (militar.checked) {
        let blindagem = campoBlindagem.value
        let municao = campoMunicao.value

        let c = new Militar(modelo, portas, blindagem, municao)
        carros.push(c)
    } else {
        let c = new Carro(modelo, portas)
        carros.push(c)
    }

    limparCampos()
    mostrarRegistros()
})