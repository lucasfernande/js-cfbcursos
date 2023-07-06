function* cores() {
    yield 'Azul'
    yield 'Verde'
    yield 'Amarelo'
}

// const iterador = cores()

// console.log(iterador.next().value) // -> retorna Azul
// console.log(iterador.next().value) // -> retorna Verde
// console.log(iterador.next().value) // -> retorna Amarelo

function* perguntas() {
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual seu esporte favorito'
    return `Nome: ${nome} - Esporte favorito: ${esporte}`
}

const iterPerguntas = perguntas()
console.log(iterPerguntas.next().value)
console.log(iterPerguntas.next('Joãozinho').value)
console.log(iterPerguntas.next('Fut').value);