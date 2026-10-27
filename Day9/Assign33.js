// Assignment 33: JSON Student Records

const student = {
    id: 101,
    name: "Aman",
    marks: [80, 75, 90],
    passed: true
};

// Convert object to JSON string
const jsonData = JSON.stringify(student, null, 2);
console.log("JSON Data:");
console.log(jsonData);

// Convert JSON string back to object
const parsedStudent = JSON.parse(jsonData);

console.log("\nStudent Name:", parsedStudent.name);
console.log("Total Marks:",
    parsedStudent.marks.reduce((sum, mark) => sum + mark, 0));

// Test cases
console.log("\nTest Cases:");
console.log("Name test:", parsedStudent.name === "Aman");
console.log("Marks test:", parsedStudent.marks.length === 3);
console.log("Pass test:", parsedStudent.passed === true);