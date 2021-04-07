// Break
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(`${i} \n `);
}
function BR() { console.log('===================================================='); };
BR();

// Continue
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log('Aqui vai quebrar o loop e vai fazer a verificação de novo')
        continue;
    }
    console.log(`${i} \n`)
}

BR();

// Skipping 13
for (i = 0; i < 15; i++) {
    if (i == 13) {
        console.log('O quarto 13 está fechado.');
        continue;
    }
    console.log(`${i} está aberto`);
}

BR();
