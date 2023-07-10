function curso() {
    return [...document.querySelectorAll('.selecionado')][0]
}

function tirarSelecao() {
    let cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map(div => {
        div.classList.remove('selecionado')
    })
}

function addCurso(curso) {
    let cursos = [...document.querySelectorAll('input[type=radio]')]

    let div = document.createElement('div')
    div.setAttribute('id', `c${cursos.length}`)
    div.setAttribute('class', 'curso')
    div.textContent = curso
    div.addEventListener('click', (event) => {
        tirarSelecao()
        event.target.classList.toggle('selecionado')
    })
    return div
}

const cursos = ['HTML', 'CSS', 'JS', 'PHP', 'Python', 'React', 'Java']
const box2 = document.querySelector('#box2')

cursos.map(c => { // preenchendo a lista de cursos
    box2.appendChild(addCurso(c))
})

const cursoSelect = document.querySelector('#cursoSelect')
cursoSelect.addEventListener('click', () => {
    try {
        alert(`Curso selecionado: ${curso().textContent}`)
    } catch (ex) {
        alert('Selecione um curso!')
    }
})

const remove = document.querySelector('#remove')
remove.addEventListener('click', () => {
    try {
        curso().remove()
    } catch (ex) {
        alert('Selecione um curso!')
    }
})

const campoNovoCurso = document.querySelector('#campoNovoCurso')
const btnAddAntes = document.querySelector('#addAntes')
btnAddAntes.addEventListener('click', () => {
    try {
        if (campoNovoCurso.value.length > 0 && curso() != null) {
            let novoCurso = addCurso(campoNovoCurso.value)
            box2.insertBefore(novoCurso, curso())
        } else {
            alert('Erro: preencha todos os campos e selecione um curso!')
        }   
    } catch (ex) {
        alert('Selecione um curso!')
    }
})

const btnAddDepois = document.querySelector('#addDepois')
btnAddDepois.addEventListener('click', () => {
    try {
        if (campoNovoCurso.value.length > 0) {
            let novoCurso = addCurso(campoNovoCurso.value)
            box2.insertBefore(novoCurso, curso().nextSibling)
        } else {
            alert('Erro: preencha todos os campos e selecione um curso!')
        }   
    } catch (ex) {
        alert('Selecione um curso!')
    }
})