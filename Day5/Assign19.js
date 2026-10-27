
console.log("MINI PROJECT 1: Number Analyzer");

function analyzeNumber(number) {
    if (number > 0) {
        console.log(number, "is positive");
    } else if (number < 0) {
        console.log(number, "is negative");
    } else {
        console.log("The number is zero");
    }

    if (number % 2 === 0) {
        console.log(number, "is even");
    } else {
        console.log(number, "is odd");
    }
}

analyzeNumber(8);

console.log("\nMINI PROJECT 2: Multiplication Table");

function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiplicationTable(7);
