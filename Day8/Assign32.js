// Assignment 32: Profile Summary

const profile = {
    name: "Riya Sharma",
    age: 18,
    city: "Varanasi",
    course: "Web Development"
};

// Object utility methods
console.log("Profile Keys:", Object.keys(profile));
console.log("Profile Values:", Object.values(profile));
console.log("Profile Entries:", Object.entries(profile));

// Generate profile summary
function generateSummary(user) {
    return `${user.name} is ${user.age} years old,
lives in ${user.city}, and studies ${user.course}.`;
}

console.log("\nProfile Summary:");
console.log(generateSummary(profile));

// Copy object using spread operator
const updatedProfile = {
    ...profile,
    course: "Full Stack Development"
};

console.log("\nUpdated Course:", updatedProfile.course);