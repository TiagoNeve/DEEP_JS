
function BR() { console.log("==============================================") }

BR()

//Construtor de objetos

function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;

    this.getName = function () {
        return this.name;
    }

    this.setName = function (name) {
        this.name = name;
        return `O nome foi mudado para ${this.name}`
    }
}

var tiago = new person("Tiago", 21, "Cyan");

console.log(`Seu nome: ${tiago.name} \nSua idade: ${tiago.age} \nSua cor favorita é ${tiago.favColor}`);
BR();
console.log(tiago.getName());
console.log(tiago.setName("Stuler"));

BR();

// Desafio
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = printData;
}
function printData() {
    console.log(`${this.name}: ${this.number}`);
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();
