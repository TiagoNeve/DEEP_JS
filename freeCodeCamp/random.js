function randomFraction() {
    return Math.random();
}

function randomWholeNum() {
    return Math.floor(Math.random() * 10)
}

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function convertToInteger(str) {
    return parseInt(str);
}

function convertToInteger(str) {
    return parseInt(str, 2);
}

function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

function checkSign(num) {
    return (num > 0) ? "positive" :
        (num < 0) ? "negative" : "zero";
}
