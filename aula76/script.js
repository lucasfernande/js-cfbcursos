const texto = document.querySelector('#texto')
const btnProcessar = document.querySelector('#processar')

function processar() {
    let promise = new Promise((ok, error) => {
        let res = true
        setTimeout(() => {
            if (res) {
                ok('OK')
            } else {
                error('ERROR')
            }
        }, 3000)
    })
    return promise
}

btnProcessar.addEventListener('click', () => {
    texto.textContent = 'Processando...'
    processar()
    
    .then((ret => {
        texto.textContent = ret
        texto.classList.remove('error')
        texto.classList.add('ok')
    }))
    
    .catch((ret) => {
        texto.textContent = ret
        texto.classList.remove('ok')
        texto.classList.add('error')
    })
})

