const relogio = document.querySelector('#relogio')

/* 
let data = new Date()
let dia = data.getDate() // retorna o dia do mês

let mes = data.getMonth() + 1 // retorna o mês (0 a 11)
mes = mes < 10 ? `0${mes}` : mes
let ano = data.getFullYear() // retorna o ano
*/


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
}

let intervalo = setInterval(getHora, 1000)


// getDay() - dia da semana
// getHours() - horas
// getMinutes() - minutos
// getSeconds() - segundos
// getMilliseconds() - milisegundos
// getTime() ou Date.now() - timestamp (milisegundos desde 01/01/1970 00:00:00 UTC)
// getTimezoneOffset() - Timezone do local

// setTime() - seta um dia do mês
// setMonth() - seta um mês
// setFullYear() - seta um ano
// setHours - seta a hora
// setMinutes() - seta os minutos
// setSeconds() - seta os segundos
// setMilliseconds() - seta os milisegundos
// toDateString() - retorna somente a data