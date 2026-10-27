
console.log("1. Find the Sum of Array Elements");

function findSum(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(findSum([10, 20, 30, 40]));


console.log("\n2. Find the Largest Element");

function findLargest(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Array is empty or invalid";
    }

    return Math.max(...numbers);
}

console.log(findLargest([12, 45, 23, 67, 34]));


console.log("\n3. Reverse a String");

function reverseString(text) {
    return [...text].reverse().join("");
}

console.log(reverseString("JavaScript"));


console.log("\n4. Check Palindrome");

function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");

    return cleaned === [...cleaned].reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


console.log("\n5. Count Vowels");

function countVowels(text) {
    const matches = text.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(countVowels("JavaScript Programming"));


console.log("\n6. Remove Duplicate Elements");

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


console.log("\n7. Count Words");

function countWords(text) {
    const cleaned = text.trim();

    return cleaned === "" ? 0 : cleaned.split(/\s+/).length;
}

console.log(countWords("JavaScript is easy to learn"));
