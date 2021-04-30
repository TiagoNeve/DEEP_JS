// Recursão
/**
 * Escreva uma função recursiva que verifique se um número é par ou impar
 */

function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return number < 0 ? isEven(number + 2) : isEven(number - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-10));