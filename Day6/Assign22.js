
function isValidName(name) {
    if (typeof name !== "string") {
        return false;
    }

    if (name.trim() === "") {
        return false;
    }

    return true;
}

function isValidAge(age) {
    if (typeof age !== "number") {
        return false;
    }

    if (!Number.isFinite(age)) {
        return false;
    }

    return age >= 1 && age <= 120;
}

function isValidEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    const trimmedEmail = email.trim();

    if (trimmedEmail === "") {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
}

function isValidPassword(password) {
    if (typeof password !== "string") {
        return false;
    }

    return password.length >= 8;
}

// Test cases
console.log("Name:", isValidName("Aarav"));
console.log("Empty name:", isValidName("   "));
console.log("Age:", isValidAge(18));
console.log("Invalid age:", isValidAge(150));
console.log("Email:", isValidEmail("student@example.com"));
console.log("Invalid email:", isValidEmail("student"));
console.log("Password:", isValidPassword("hello123"));
console.log("Short password:", isValidPassword("abc"));
