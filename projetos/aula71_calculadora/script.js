const display = document.querySelector('#display')

let sinal = false
let decimal = false

const nums = [...document.querySelectorAll('.n')]
nums.map(n => {
    n.addEventListener('click', () => {
        sinal = false
        if (n.textContent == ',') {
            if (!decimal) {
                decimal = true
                if (display.textContent == '') {
                    display.textContent = '0,'
                } else {
                    display.textContent += n.textContent
                }
            }
        } else {
            display.textContent += n.textContent
        }
    })
})

const teclasOp = [...document.querySelectorAll('.op')]
teclasOp.map(op => {
    op.addEventListener('click', () => {
        if (!sinal) { // não será possível colocar dois sinais de operação consecutivos
            sinal = true
            decimal = false
            display.textContent += op.textContent
        }
    })
})

const igual = document.querySelector('.igual') 
igual.addEventListener('click', () => {
    let operacao = eval(display.textContent.replaceAll('x', '*').replaceAll(',', '.'))
    display.textContent = String(operacao).replaceAll('.', ',')
})

const limpar = document.querySelector('.limpar')
limpar.addEventListener('click', () => {
    sinal = false
    decimal = false
    display.textContent = ''
})

const apagar = document.querySelector('.apagar')
apagar.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1)
})