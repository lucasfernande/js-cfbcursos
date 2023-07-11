const operacoes = [
    (a, b) => {
        return Number(a) + Number(b)
    }, 
    (a, b) => {
        return Number(a) - Number(b)
    }, 
    (a, b) => {
        return Number(a) * Number(b)
    }, 
    (a, b) => {
        return Number(a) / Number(b)
    }, 
]

let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')

const btnSoma = document.querySelector('#soma')
const btnSub = document.querySelector('#sub')
const btnMult = document.querySelector('#mult')
const btnDivid = document.querySelector('#divid')
const res = document.querySelector('#res')

btnSoma.addEventListener('click', () => {
    res.value = operacoes[0](n1.value, n2.value)
})

btnSub.addEventListener('click', () => {
    res.value = operacoes[1](n1.value, n2.value)
})

btnMult.addEventListener('click', () => {
    res.value = operacoes[2](n1.value, n2.value)
})

btnDivid.addEventListener('click', () => {
    res.value = operacoes[3](n1.value, n2.value)
})