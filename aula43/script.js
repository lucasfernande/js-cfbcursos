const eleitores = [
    {nome: 'Paulo', idade: 28},
    {nome: 'Maria', idade: 17},
    {nome: 'João', idade: 22},
]

// o filter retorna todos os valores que satisfazem a condição
console.log(eleitores.filter(p => p.idade >= 18))