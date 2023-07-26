const container = document.getElementById('container')
const nObjetos = document.querySelector('#nObjetos')
const qtdBolas = document.querySelector('#qtdBolas')
const btnAdd = document.querySelector('#addObj')
const btnRemove = document.querySelector('#removeObjs')

let largura = container.offsetWidth
let altura = container.offsetHeight
let bolinhas = []

let qtdTotal = 0
let qtdAtual = 0

class Bola {
    constructor() {
        this.tamanho = Math.round(Math.random() * 20) + 10 // de 10 a 30
        this.cor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`
        this.x = Math.floor(Math.random() * (largura - this.tamanho))
        this.y = Math.floor(Math.random() * (altura - this.tamanho))
        this.velX = Math.round(Math.random() * 3) + 0.5
        this.velY = Math.round(Math.random() * 3) + 0.5
        this.dirX = Math.random() * 10 > 5 ? 1 : -1
        this.dirY = Math.random() * 10 > 5 ? 1 : -1
        this.id = `b${qtdTotal}`
        this.criarBola()
        this.eu = document.querySelector(`#${this.id}`)
        this.controle = setInterval(this.controlar, 10)
    }

    criarBola = () => {
        const div = document.createElement('div')
        div.classList.add('bola')
        div.style.width = `${this.tamanho}px`
        div.style.height = `${this.tamanho}px`
        div.style.top = `${this.y}px`
        div.style.left = `${this.x}px`
        div.style.backgroundColor = this.cor
        div.id = this.id
        container.appendChild(div)
    }

    bateuNaBorda = () => {
        if (this.x + this.tamanho >= largura) {
            this.dirX = -1
        } else if (this.x <= 0) {
            this.dirX = 1
        }

        if (this.y + this.tamanho >= altura) {
            this.dirY = -1
        } else if (this.y <= 0) {
            this.dirY = 1
        }
    }

    remover = () => {
        clearInterval(this.controle)
        bolinhas = bolinhas.filter(b => {
            if (b.id != this.id) {
                return b
            }
        })
        this.eu.remove()
        qtdAtual--
        nObjetos.value = qtdAtual
    }

    controlar = () => {
        this.bateuNaBorda()
        this.x += this.dirX * this.velX
        this.y += this.dirY * this.velY
        
        this.eu.style.top = `${this.y}px`
        this.eu.style.left = `${this.x}px`

        if (this.x > largura || this.y > altura) {
            this.remover()
        }
    }
}

window.addEventListener('resize', () => {
    largura = container.offsetWidth
    altura = container.offsetHeight
})

btnAdd.addEventListener('click', () => {
    let n = qtdBolas.value

    for (var i = 0; i < n; i++) {
        qtdAtual++
        qtdTotal++
        bolinhas.push(new Bola())
        nObjetos.value = qtdAtual
    }
})

btnRemove.addEventListener('click', () => {
    if (nObjetos.value > 0) {
        bolinhas.map(b => {
            b.remover()
        })
    }
})