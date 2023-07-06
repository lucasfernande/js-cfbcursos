// const nums = [2, 1, 8, 5, 9]

// nums.map(n => console.log(n))

// let dobrar = e => e * 2
// console.log(nums.map(dobrar))

let jogos = ['Dantes Inferno', 'GTA V', 'Gran Turismo', 'Dark Souls', 'COD Ghosts', 'Rise of The Tomb Raider']

let select = document.querySelector('#selectJogos')

jogos.map((j, i) => {
    let option = document.createElement('option')
    option.setAttribute('value', i)
    option.textContent = j
    select.appendChild(option)
})

