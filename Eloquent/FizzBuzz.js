/**
 *  FizzBuzz
 *
 *  Programa que faz os números divisiveis por 3 mostrarem Fizz.
 *  Divisiveis por 5 Buzz,
 *  Divisiveis pelos dois FizzBuzz.
 */

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

// Outras maneiras de resolver o mesmo problema
console.log("=== Outras formas de resolver o mesmo problema ===")

let cont1 = 1
while (cont1 <= 100) {

    if ((cont1 % 3 === 0) && (cont1 % 5 === 0)) {
        console.log("FizzBuzz")
    } else if (cont1 % 3 === 0) {
        console.log("Fizz")
    } else if (cont1 % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(cont1)
    }

    cont1++
}