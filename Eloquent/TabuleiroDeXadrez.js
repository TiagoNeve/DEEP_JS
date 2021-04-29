/**
 *  Tabuleiro de Xadrez
 *
 *  Objetivo é criar um tabuleiro de xadrez 8x8
 *  Em que as pretas são # e as brancas são espaçoes em brancos.
 */
let tabuleiro = "";
let contador = 0;
let column = 0;
do {
    for (; column < 8; column++) {

        if (column % 2 === 0) {
            tabuleiro += "#";
        } else {
            tabuleiro += " ";
        };
    }

    tabuleiro += "\n";
    column = 0;

    for (; column < 8; column++) {

        if (column % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        };
    }

    tabuleiro += "\n";
    column = 0;

    contador++;


} while (contador < 4);
console.log(tabuleiro)