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

function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}

function fatorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum);
        return arr;
    }
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(4, 4));
