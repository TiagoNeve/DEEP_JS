// Para encontrar valores de caracteres em uma string deve colocar /text/
let testStr = "freeCodeCamp";
let testRegex = /Code/;

testRegex.test(testRegex) // Retorna true se o regex for válido

// Para verificar ocorrencias no modo insesible case use: i ao final do regex
testRegex = /Code/i

// Para verificar a quantidade de ocorrencias, use: g ao final do redex
testRegex = /Code/gi

// Para verificar o match com várias palavras que possuem uma mesma composição:
// use : . nas letras que são aleatórias.
testRegex = /.ode/