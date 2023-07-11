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

function limparCampos() {
    nome.value = ''
    nome.focus()
    idade.value = ''
}

function mostrarRegistros() {
    registros.innerHTML = ''
    
    pessoas.map(p => {
        const div = document.createElement('div')
        div.setAttribute('class', 'boxPessoa')
        div.textContent = `Nome: ${p.nome} - Idade: ${p.idade}`

        registros.appendChild(div)
    })
}

let pessoas = []
let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let registros = document.querySelector('#registros')

const btnCadastro = document.querySelector('#btnCadastro')
btnCadastro.addEventListener('click', () => {
    let p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)

    limparCampos()
    mostrarRegistros()
})