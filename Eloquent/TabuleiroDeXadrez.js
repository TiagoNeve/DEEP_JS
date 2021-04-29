/**
 *  Tabuleiro de Xadrez
 *
 *  Objetivo é criar um tabuleiro de xadrez 8x8
 *  Em que as pretas são # e as brancas são espaçoes em brancos.
 */
let tabuleiro = "";
let contador = 0;
let column = 0;
let size = 8;
do {
    for (; column < size; column++) {

        if (column % 2 === 0) {
            tabuleiro += "#";
        } else {
            tabuleiro += " ";
        };
    }

    tabuleiro += "\n";
    column = 0;

    for (; column < size; column++) {

        if (column % 2 === 0) {
            tabuleiro += " ";
        } else {
            tabuleiro += "#";
        };
    }

    tabuleiro += "\n";
    column = 0;

    contador++;


} while (contador < size / 2);


console.log(tabuleiro)