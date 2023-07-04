const soma = (a, b, c) => a + b + c

// spread -> espalhar

nums = [3, 2, 2, 5, 8, 6]
console.log(soma(...nums)) // vai pegar os 3 primeiros, devido a função ter 3 parâmetros

const divs = document.getElementsByTagName('div') // retorna um HTMLCollection
const arrayDivs = [...divs]
console.log(arrayDivs);

/* 
    o HTMLCollection tem poucas funções
    usando o spread para criar um array com os elementos html,
    podemos usar muitas funções de array (filter, map, forEach etc)
*/

arrayDivs.map((div) => div.textContent += ' Testando Map')