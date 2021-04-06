class Calculadora {
    soma(num1, num2) {
        return num1 + num2
    }

    menos(num1, num2) {
        return num1 - num2
    }

    mult(num1, num2) {
        return num1 * num2
    }

    div(num1, num2) {
        const result = num1 / num2

        if (result === Infinity) {
            return "Divisão por 0"
        } else {
            return result
        }
    }
}

module.exports = Calculadora