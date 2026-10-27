
let marks = 85;

console.log("Grade Calculator");
console.log("--------------------");
console.log("Marks:", marks);

if (marks < 0 || marks > 100) {
    console.log("Invalid marks. Enter marks between 0 and 100.");
} else if (marks >= 90) {
    console.log("Grade: A+");
    console.log("Result: Excellent");
} else if (marks >= 80) {
    console.log("Grade: A");
    console.log("Result: Very Good");
} else if (marks >= 70) {
    console.log("Grade: B");
    console.log("Result: Good");
} else if (marks >= 60) {
    console.log("Grade: C");
    console.log("Result: Average");
} else if (marks >= 40) {
    console.log("Grade: D");
    console.log("Result: Pass");
} else {
    console.log("Grade: F");
    console.log("Result: Fail");
}
