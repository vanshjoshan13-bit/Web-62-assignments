
function calculateAverage(marks) {
    if (!Array.isArray(marks) || marks.length === 0) {
        return "Error: Marks must be a non-empty array";
    }

    if (!marks.every(mark =>
        typeof mark === "number" &&
        Number.isFinite(mark) &&
        mark >= 0 &&
        mark <= 100
    )) {
        return "Error: Marks must be between 0 and 100";
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);

    return total / marks.length;
}

// Test cases
const testCases = [
    { input: [80, 90, 70], expected: 80 },
    { input: [100, 100], expected: 100 },
    { input: [40, 60], expected: 50 },
    { input: [], expected: "Error: Marks must be a non-empty array" },
    { input: [80, 120], expected: "Error: Marks must be between 0 and 100" },
    { input: [-5, 50], expected: "Error: Marks must be between 0 and 100" }
];

console.log("Average Calculator Test Results");
console.log("--------------------------------");

testCases.forEach((test, index) => {
    const actual = calculateAverage(test.input);
    const passed = actual === test.expected;

    console.log(`Test ${index + 1}: ${passed ? "PASS" : "FAIL"}`);
    console.log("Input:", test.input);
    console.log("Expected:", test.expected);
    console.log("Actual:", actual);
    console.log("-------------------------------");
});
