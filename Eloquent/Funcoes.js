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

// Nunca execute esse tipo de chamadas de função, pois explodirá a pilha de chamadas 

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }
// console.log(chicken() + " came first.");

// Funções com argumentos opcionais

function power2(base, expoente) {
    let result = 1;
    if (expoente == undefined) {
        expoente = 2;
    }

    for (let i = 0; i < expoente; i++) {
        result *= base;
    }


    return result;
}

console.log(power2(2)); // 4
console.log(power2(2, 4)); // 16

// Funções closure

function multiplier(factor) {
    return function (number) {
        return number * factor;
    }
}

let twice = multiplier(2);
console.log(twice(30));

// Função Recursiva 
function power3(base, expoente) {
    if (expoente == 0) {
        return 1;
    } else {
        return base * power3(base, expoente - 1);
    }
}

console.log(power3(2, 2))

// Recursividade na prática : Será que irei compreender essa lógica com primazia ?? 
function findSolution(target) {
    function find(start, history) {
        if (start == target) {
            return history;
        } else if (start > target) {
            return null;
        } else {
            return find(start + 5, `( ${history} + 5 )`) || find(start * 3, `( ${history} * 3 )`)
        }
    }
    return find(1, "1");
}

console.log(findSolution(24))