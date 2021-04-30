//  Contando Feijões

/**
 * Escrever um função que encontre a quantidade de B que tem numa string
 * E escrever uma função que encontra a quantidade de caracteres que for passada como argumento em uma string
 */

function countChar(frase, caractere = "B") {
    let result = 0;
    for (let letra of frase) {
        if (letra === caractere) {
            result++;
        }
    }

    return result;
}

console.log(countChar("BBC"));
console.log(countChar("kakkerlak", "k"));