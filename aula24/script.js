// Parâmetros REST

function soma(...nums) { // não importa a quantidade de parâmetros passados para a função
    return nums.reduce((soma, n) => soma + n, 0)
}
