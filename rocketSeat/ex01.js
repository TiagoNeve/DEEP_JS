// 1 - Declara uma variável de nome weigth

let weigth

// 2 - Que tipo de dado é a variável acima ? 

console.log(typeof weight) // undefined

// 3 - Declare uma variável e atribua valores para cada um dos dados;

let name = "Tiago"
const age = 21
const stars = 3.5
const isSubscribed = true

// 4 - A variável student é de que tipo de dados?
let student = {}

console.log(typeof student) // Object

// 4.1 - Atribua a variável student os mesmo atributos e valores da questão 3

student = {
    name: "Tiago",
    age: 21,
    weight: 69.9,
    isSubscribed: true
}

// 4.2 - Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weigth>

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)