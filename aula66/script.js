let pessoa = {
    nome: 'Joãozinho',
    idade: 10,
    endereco: 'Rua Tal',
    telefone: '77899999999'
}

let pessoaJSON = JSON.stringify(pessoa) // convertendo objeto pessoa para uma string JSON
console.log(pessoaJSON)

let pessoaOBJ = JSON.parse(pessoaJSON) // convertendo a string JSON novamente para objeto
console.log(pessoaOBJ)