/* Minimo -> Exercício.
    Escreve uma função chamada min, que recebe dois argumentos e retorna o menor deles

*/

function min(primeiro, segundo) {
    return primeiro > segundo ? segundo : primeiro;
}

console.log(min(0, 10));
console.log(min(0, -10));