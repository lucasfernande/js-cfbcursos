import user from "./user.js"

const usersList = document.getElementById('users-list')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    if (name.value && email.value && phone.value) {
        const newUser = {
            name: name.value,
            email: email.value,
            phone: phone.value
        }

        user.create(newUser)
        showUsers()
    } else {
        alert('Preencha todos os campos!')
    }
})

function showUsers() {
    usersList.innerHTML = ''

    let allUsers = user.getAllUsers()
    allUsers.map(currentUser => {
        const li = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = `Nome: ${currentUser.name} | Email: ${currentUser.email} | Telefone: ${currentUser.phone}`
        
        const btnDeleteUser = document.createElement('i')
        btnDeleteUser.setAttribute('id', 'btn-delete-user')
        btnDeleteUser.setAttribute('class', 'fa-solid fa-trash-can')
        btnDeleteUser.addEventListener('click', () => {
            btnDeleteUser.parentNode.parentNode.remove()
            user.delete(currentUser)
        })

        span.appendChild(btnDeleteUser)
        li.appendChild(span)
        usersList.appendChild(li)
    })
}