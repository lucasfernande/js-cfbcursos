function Aluno(nome, nota) {
    this.nome = nome
    this.nota = nota
    this.mostrarAluno = () => { 
        console.log(`Nome: ${this.nome}, Nota: ${this.nota}`)
    }
}

// as arrow functions não possuem seu próprio this, assim, ela usará o this do objeto "pai" dela (no caso a função Aluno)

let aluno1 = new Aluno('Joãozinho', 8)
aluno1.mostrarAluno()

