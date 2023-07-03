let a = 10 // 1010
let b = 11 // 1011

console.log(a & b) // resultado 10


/* 
    com o operador &, quando tiver equivalência de bits 1, será retornado bit 1

    1010
    1011
    ----
    1010 -> 10
*/

console.log(a | b)

/* 
    com o operador |, quando tiver 1 na comparação, será retornado bit 1

    1010
    1011
    ----
    1011 -> 11
*/

console.log(a ^ b)

/* 
    com o operador ^, quando tiver equivalência de bits, retorna 0
    com tiver um bit 1, retorna 1

    1010
    1011
    ----
    0001 -> 1
*/

console.log(a << 1)

/*
    << desloca os bits 1 vez para a esquerda

     1010 -> 10
    <----
    10100 -> 20 (dobrou)
*/

console.log(a >> 1)

/* 
    >> desloca os bits 1 vez para a direita

    1010 -> 10
    ---->
    0101 -> 5 (dividiu pela metade)
*/
