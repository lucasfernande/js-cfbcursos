/*  
    as funções anônimas não tem nome e nem lugar na memória,
*/

const f = function(v1, v2) {
    return v1 + v2
}
console.log(f(5, 7))


// função construtora
const somaConst = new Function('...nums', 'return nums.reduce((soma, n) => soma += n, 0)')
console.log(somaConst(4, 5, 1))

// arrow function
const somaArrow = (...nums) => nums.reduce((soma, n) => soma += n, 0)
console.log(somaArrow(4, 5, 8));
// na arrow function, quando há somente um comando, o return já é implícito e não precisa das chaves

