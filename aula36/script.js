const btns = [...document.querySelectorAll('.btn')]
const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const transferir = document.querySelector('#transf')

btns.map(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('selecionado')
    })
})

transferir.addEventListener('click', () => {
    const btnSelec = [...document.querySelectorAll('.selecionado')]
    const btnNaoSelec = [...document.querySelectorAll('.btn:not(.selecionado)')]

    btnSelec.forEach(btn => {
        box2.appendChild(btn)
    })

    btnNaoSelec.forEach(btn => {
        box1.appendChild(btn)
    })
})


