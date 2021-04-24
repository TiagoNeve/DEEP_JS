// Sistema de gastos familiares.

const familyAmount = {
    receitas: [
        1000,
        100,
        300,
        600,
        25
    ],
    despesas: [
        300,
        200,
        150
    ]
}

function getTotalFamilyAmount(control = "") {

    if (control !== "") {
        throw "Essa função não aceita argumentos!";
    };


    let total = 0;
    let amountReceitas = 0;
    let amountDespesas = 0;


    for (let receita of familyAmount.receitas) {
        amountReceitas += receita;
    };

    for (let despesa of familyAmount.despesas) {
        amountDespesas += despesa;
    };

    total = amountReceitas - amountDespesas;

    return total > 0 ? `Saldo positivo: ${total.toFixed(2)}` : `Saldo negativo ${total.toFixed(2)}`;
}


try {
    const result = getTotalFamilyAmount()
    console.log(result)
} catch (e) {
    console.log(e);
};
