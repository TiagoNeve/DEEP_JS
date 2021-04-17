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

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(countdown(5));

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));

function fatorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(20));