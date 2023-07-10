function curso() {
    let cursos = [...document.querySelectorAll('input[type=radio]')]
    return cursos.filter(c => c.checked)[0] // retorna um array de apenas um elemento, então pegamos o índice 0
}

function addCurso(curso) {
    let cursos = [...document.querySelectorAll('input[type=radio]')]

    let div = document.createElement('div')
    div.setAttribute('id', `c${cursos.length}`)
    div.setAttribute('class', 'curso')

    let label = document.createElement('label')
    label.setAttribute('for', `radioCurso${cursos.length}`)
    label.textContent = curso

    let radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'radioCurso')
    radio.setAttribute('id', `radioCurso${cursos.length}`)

    div.append(label)
    div.appendChild(radio)

    return div
}

const cursos = ['HTML', 'CSS', 'JS', 'PHP', 'Python', 'React', 'Java']
const box2 = document.querySelector('#box2')

cursos.map(c => { // preenchendo a lista de cursos
    box2.appendChild(addCurso(c))
})

const cursoSelect = document.querySelector('#cursoSelect')
cursoSelect.addEventListener('click', () => {
    let cursoSelecionado = curso()
    cursoSelecionado = cursoSelecionado.previousSibling.textContent
    alert(`Curso selecionado: ${cursoSelecionado}`)
})

const remove = document.querySelector('#remove')
remove.addEventListener('click', () => {
    let cursoSelecionado = curso()

    try {
        cursoSelecionado.parentNode.remove()
    } catch (ex) {
        alert('Selecione um curso!')
    }
})

const campoNovoCurso = document.querySelector('#campoNovoCurso')
const btnAddAntes = document.querySelector('#addAntes')
btnAddAntes.addEventListener('click', () => {
    let cursoSelecionado = curso()
    try {
        if (campoNovoCurso.value.length > 0) {
            let novoCurso = addCurso(campoNovoCurso.value)
            box2.insertBefore(novoCurso, cursoSelecionado.parentNode)
        } else {
            alert('Preencha o campo!')
        }   
    } catch (ex) {
        alert('Selecione um curso!')
    }
})

const btnAddDepois = document.querySelector('#addDepois')
btnAddDepois.addEventListener('click', () => {
    let cursoSelecionado = curso()
    try {
        if (campoNovoCurso.value.length > 0) {
            let novoCurso = addCurso(campoNovoCurso.value)
            box2.insertBefore(novoCurso, cursoSelecionado.parentNode.nextSibling)
        } else {
            alert('Preencha o campo!')
        }   
    } catch (ex) {
        alert('Selecione um curso!')
    }
})