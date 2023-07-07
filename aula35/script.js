const btns = [...document.querySelectorAll('.btn')]

btns.map(b => {
    b.addEventListener('click', () => {
        b.style.background = 'darkgreen'
    })
})
