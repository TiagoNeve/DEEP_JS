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

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`)

// 5 - Declare uma variável de tipo array, nome students e nenhum valor.

let students = []

// 6 - Inserir o objeto student dentro do array.

students[0] = student

console.log(students)

// 7 - Coloque no console o valor da posição zero do array

console.log(students[0])

// 8 - Crie um novo student e coloque na posição 1 do array

const stuler = {
    name: "Stuler",
    age: 1000,
    weigth: 71,
    isSubscribed: true
}

students[1] = stuler

console.log(students)

// 9 - Questão sobre o hoisting da variáveis declaradas com var.
