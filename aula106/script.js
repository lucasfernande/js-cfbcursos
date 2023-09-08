let nome = "Joãozinho da Silva"
let numeros = "blablabla 15234"
let repetidos = "ooiiiiii oii"

// procura a palavra e ignora o case sensitive (i = ignorar case sensitive)
// caso não encontre, retorna -1
console.log(nome.match(/silva/i)) 

// retorna todas as letras o na string (g = global)
console.log(nome.match(/O/ig))

// retorna todos os caracteres de a até e na string
console.log(nome.match(/[a-e]/ig))

// retorna todos os números na string
console.log(numeros.match(/[0-9]/g))
console.log(numeros.match(/\d/g))

// retorna todos os espaços na string
console.log(nome.match(/\s/g))

// retorna todos os caracteres, inclusive consecutivos
console.log(repetidos.match(/i+/g))

numeros = '1, 10, 100, 1000'
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))



