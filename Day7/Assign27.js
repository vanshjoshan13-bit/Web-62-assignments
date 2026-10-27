
function cleanText(text) {
    if (typeof text !== "string") {
        return "";
    }

    return text.trim().replace(/\s+/g, " ");
}

function cleanName(name) {
    return cleanText(name)
        .toLowerCase()
        .replace(/\b[a-z]/g, letter => letter.toUpperCase());
}

function cleanEmail(email) {
    return cleanText(email).toLowerCase();
}

function cleanPhone(phone) {
    if (typeof phone !== "string") {
        return "";
    }

    return phone.replace(/\D/g, "");
}

function cleanFormData(formData) {
    return {
        name: cleanName(formData.name),
        email: cleanEmail(formData.email),
        phone: cleanPhone(formData.phone)
    };
}

// Test the utility
const formData = {
    name: "   aARAV    shARMA   ",
    email: "  STUDENT@EXAMPLE.COM ",
    phone: "+91 98765-43210"
};

console.log("Original Form Data:");
console.log(formData);

console.log("\nCleaned Form Data:");
console.log(cleanFormData(formData));
