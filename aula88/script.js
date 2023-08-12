const url = document.getElementById('url')
const btn = document.querySelector('#ir')

btn.addEventListener('click', () => {
    window.location = url.value

    // window.location.assign(url.value) // substitui a atual url (fica no histórico)
    // window.location.replace(url.value) // substitui a atual url (não fica no histórico)
    // window.history.forward() // vai para a próxima página do histórico
    // window.history.back() // volta uma página no histórico
})