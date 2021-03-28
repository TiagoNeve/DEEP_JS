const Calculadora = require('../src/scripts/app')
const calculadora = new Calculadora


test('Espera que 1 + 2 retorne 3', () => {
    expect(calculadora.soma(1, 2)).toBe(3);
});

test('Espera que 1 - 2 retorne -1', () => {
    expect(calculadora.menos(1, 2)).toBe(-1);
});

test('Espera que 10 - 5 retorne 5', () => {
    expect(calculadora.menos(10, 5)).toBe(5);
});

test('Espera que 5 x 5 retorne 25', () => {
    expect(calculadora.mult(5, 5)).toBe(25);
});

test('Espera que 0 x 100 retorne 0', () => {
    expect(calculadora.mult(0, 100)).toBe(0);
});

test('Espera que 10 / 2 retorne 5', () => {
    expect(calculadora.div(10, 2)).toBe(5)
})

test('Espera que 100 / 0 retorne "Divisão por 0"', () => {
    expect(calculadora.div(100, 0)).toBe("Divisão por 0")
})