// Exercícios do fim do discovery

// 01 - Transformar notas escolares.


function transformSchollScore(score = "") {
    if (score == "") {
        throw "Informe uma nota para transforma-la"
    };

    let newScore;

    if (score >= 90) {
        newScore = "A"
    } else if (score >= 80) {
        newScore = "B"
    } else if (score >= 70) {
        newScore = "C"
    } else if (score >= 60) {
        newScore = "D"
    } else {
        newScore = "F"
    }

    return newScore;
}

try {

    result = transformSchollScore()
    console.log(result)

} catch (e) {
    console.log(e)
}