
console.log("Example 1: Global and Local Scope");

let globalName = "JavaScript";

function showName() {
    let localName = "Developer";
    console.log("Global:", globalName);
    console.log("Local:", localName);
}

showName();

console.log("\nExample 2: Block Scope");

let x = 10;

if (true) {
    let y = 20;
    const z = 30;

    console.log("Inside block, x =", x);
    console.log("Inside block, y =", y);
    console.log("Inside block, z =", z);
}

console.log("Outside block, x =", x);

// y and z cannot be accessed outside the block.

console.log("\nExample 3: Function Hoisting");

greet();

function greet() {
    console.log("Hello, welcome to JavaScript!");
}

console.log("\nExample 4: var Hoisting");

console.log(value); // undefined
var value = 100;

console.log(value); // 100
