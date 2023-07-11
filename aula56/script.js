// a coleção Set é semelhante ao Map, mas não aceita valores duplicados

// é possível colocar dados já no construtor do set
let dados = new Set(['teste', 'teste1', 'teste']) 

dados.add('set')
dados.delete('teste1')

console.log(dados) // o último "teste" será excluído, pois o set não aceita valores iguais

dados.clear() // exclui todos os dados do Set
console.log(dados)