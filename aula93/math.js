function soma(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

// define o membro padrão que será exportado (limite de apenas um)
export default function multiplicar(a, b) {
    return a * b
}

export {soma, subtrair}