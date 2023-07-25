const container = document.querySelector('#container')
const btnAtivar = document.querySelector('#btnAtivar')
const btnParar = document.querySelector('#btnParar')
const campoAlarme = document.querySelector('#campoAlarme')
const horaAlarme = document.querySelector('#horaAlarme')
const relogio = document.querySelector('#relogio')

let tsAtual = null
let tsAlarme = null

let alarmeAtivado = false

function getHora() {
    let data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? `0${hora}` : hora

    let minuto = data.getMinutes()
    minuto = minuto < 10 ? `0${minuto}` : minuto

    let segundo = data.getSeconds()
    segundo = segundo < 10 ? `0${segundo}` : segundo

    let horaCompleta = `${hora}:${minuto}:${segundo}`
    relogio.textContent = horaCompleta
    // relogio.textContent = data.toLocaleTimeString()

    if (alarmeAtivado) {
        if (data.getTime() >= tsAlarme) {
            container.classList.add('alarme')
        }
    }
}

let intervalo = setInterval(getHora, 1000)

btnAtivar.addEventListener('click', () => {
    tsAtual = Date.now()// ts -> timestamp
    tsAlarme = tsAtual + campoAlarme.value * 1000 // 1s = 1000ms

    alarmeAtivado = true
    const alarme = new Date(tsAlarme)
    horaAlarme.textContent = alarme.toLocaleTimeString()
})

btnParar.addEventListener('click', () => {
    container.classList.remove('alarme')
    alarmeAtivado = false
    horaAlarme.textContent = ''
    campoAlarme.value = ''
})