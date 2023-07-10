const cursos = ['HTML', 'CSS', 'Javascript', 'Java', 'Python', 'SCSS']
const campo = document.querySelector('#campo')
const btnPesq = document.querySelector('#pesq')
const res = document.querySelector('#res')
const listaCursos = document.querySelector('#listaCursos')
listaCursos.textContent = cursos

btnPesq.addEventListener('click', () => {
    if (campo.value.length > 0) {
        let pesquisa = cursos.find(c => c.includes(campo.value))
        res.textContent = pesquisa
    }
})

// o find retorna o primeiro elemento que satisfaz a condição