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
