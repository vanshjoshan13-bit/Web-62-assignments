
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

function calculateSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function isEven(number) {
    return number % 2 === 0;
}

console.log("Numbers from 1 to 5:");
printNumbers(5);

console.log("Sum from 1 to 10:", calculateSum(10));

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));
