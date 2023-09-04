let original = new String("Javascript")

console.log(original.charAt(0)); // retorna o caractere no índice 
console.log(original.charCodeAt(0)); // retorna o unicode do caractere no índice
console.log(String.fromCodePoint(74)); // retorna o caractere com base no unicode

console.log(original.concat(" HTML")); // retorna uma nova String concatenada

console.log(original.indexOf("a")); // retorna a posição da 1° ocorrência do caractere
console.log(original.lastIndexOf("a")); // retorna a posição da última ocorrência do caractere

console.log(original.localeCompare("Javascript")); // retorna se as Strings são iguais (0 = iguais, 1 ou -1 = diferentes)

console.log(original.replace("i", "y")); // substitui a 1° ocorrência de i por y

console.log(original.search("script")); // retorna a posição da String pesquisada

console.log(original.slice(0, 4)); // recorta a String do índice 0 ao 4 (4 não incluído)

console.log();

original = new String("JavaScript HTML CSS PHP")
console.log(original.split(" ")); // retorna um array com a String separada com base no delimitador

console.log(original.substring(11, 15)); // recorta a String, semelhante ao slice

console.log(original.startsWith("J")); // retorna se a String começa com J
console.log(original.endsWith("S")); // retorna se a String termina com S

console.log(original.includes("HTML")); // retorna se a String tem o texto pesquisado
