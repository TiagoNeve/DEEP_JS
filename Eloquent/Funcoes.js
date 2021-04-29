// Funções em JavasCript

let square = (x) => {
    return x ** 2;
}
console.log(square(3))


// Funções com dois parâmetros

let power = (base, exponente) => {
    let result = 1;

    for (let i = 0; i < exponente; i++) {
        result *= base;
    }

    return result;
}

console.log(power(2, 10));

// Funções utilizando a palvra function, usadas para declarar funções

function squares(value) {
    return value ** 2;
};
