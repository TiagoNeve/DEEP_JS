/**
 *  Triângulo com Loop
 *
 *  Crie um programa que faça um triângulo retângulo utilizando loops.
 *  O triângulo precisa ter 7 linhas
 */
let row = "";
for (let i = 0; i < 7; i++) {
    row += "#";
    console.log(row);
};

// Outras formas de resolver o mesmo problema
console.log(" ====  Outra forma de resolver o mesmo problema ===")
let row2 = "";
while (true) {
    row2 += "#";
    console.log(row2);
    if (row2.length == 7) {
        break;
    }
};

console.log("=== Outra forma de resolver o mesmo problema ===");
let row3 = "";
do {
    row3 += "#";
    console.log(row3);
} while (row3.length < 7)