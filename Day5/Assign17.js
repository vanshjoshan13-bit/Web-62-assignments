
console.log("1. Print numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n2. Print even numbers from 1 to 20");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("\n3. Multiplication table of 5");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n4. Calculate the sum from 1 to 10");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);

console.log("\n5. Calculate factorial of 6");

let factorial = 1;

for (let i = 1; i <= 6; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);
