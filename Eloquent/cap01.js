function fac(n) {

    if (n == 0) {
        return 1;
    } else {
        return fac(n - 1) * n;
    }
}

console.log(fac(8))

// ===========================================
var theNumber = Number(prompt("Digite um número: "))
if (!isNaN(theNumber)) {
    alert("Seu número é: ", theNumber)
}


// =============================================
var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

// ===============================================
do {
    var nome = prompt("Quem é você?");
} while (!nome);
console.log(nome);
// ===============================================
var result = 1;
for (var counter = 0; contador < 10; counter = counter + 1) {
    result = result * 2;
};
console.log(result)