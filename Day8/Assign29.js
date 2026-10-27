// Assignment 29: Student Result System

function calculateResult(name, marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = total / marks.length;

    return {
        name: name,
        total: total,
        percentage: percentage.toFixed(2),
        result: marks.every(mark => mark >= 33) ? "Pass" : "Fail"
    };
}

// Test cases
const student1 = calculateResult("Aman", [80, 75, 90, 85, 70]);
const student2 = calculateResult("Riya", [45, 30, 60, 55, 70]);

console.log("Student 1:", student1);
console.log("Student 2:", student2);