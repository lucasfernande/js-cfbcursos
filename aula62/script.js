/*  
    nos objetos literais, os objetos da classe não são independentes, 
    todos eles apontam para o mesmo endereço de memória 
*/


const Pessoa = {
    nome: '',
    idade: 0,
    getNome: function() {
        return this.nome
    },
    getIdade: function() {
        return this.idade
    },
    setNome: function(nome) {
        this.nome = nome
    },
    setIdade: function(idade) {
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
        let div = document.createElement('div')
        div.setAttribute('class', 'boxPessoa')
        div.textContent = `Nome: ${p.getNome()} - Idade: ${p.getIdade()}`

        registros.appendChild(div)
    })
}

let pessoas = []
let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let registros = document.querySelector('#registros')

const btnCadastro = document.querySelector('#btnCadastro')
btnCadastro.addEventListener('click', () => {
    let p = Pessoa
    p.setNome(nome.value)
    p.setIdade(idade.value)
    p = {...p} // fazendo uma cópia do objeto literal

    pessoas.push(p)
    limparCampos()
    mostrarRegistros()
})

