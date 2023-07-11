// a coleção map é um objeto que contém pares de chave e valor

let dados = new Map()

dados.set('nome', 'João')
dados.set('idade', 30)
dados.set('altura', 1.85)

console.log(dados)

if (dados.has('idade')) { // verifica se a chave "idade" existe no Map
    console.log(`A chave idade existe e tem o valor ${dados.get('idade')}`)
}

console.log(dados.keys()) // retorna um objeto com todas as chaves
console.log(dados.values()) // retorna um objeto com todos os valores
