
console.log("1. Merge Settings");

function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}

const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true,
    fontSize: 16
};

const userSettings = {
    theme: "dark",
    fontSize: 20
};

const finalSettings = mergeSettings(
    defaultSettings,
    userSettings
);

console.log(finalSettings);

console.log("\n2. Calculate Shopping Total");

function calculateTotal(prices) {
    if (!Array.isArray(prices)) {
        return "Error: Prices must be an array";
    }

    if (!prices.every(price =>
        typeof price === "number" &&
        Number.isFinite(price) &&
        price >= 0
    )) {
        return "Error: Invalid price";
    }

    return prices.reduce((total, price) => total + price, 0);
}

const prices = [100, 250, 50, 300];

console.log("Prices:", prices);
console.log("Total:", calculateTotal(prices));

console.log("\n3. Calculate Discount");

function calculateDiscount(total, discountPercent) {
    if (
        typeof total !== "number" ||
        !Number.isFinite(total) ||
        total < 0
    ) {
        return "Error: Invalid total";
    }

    if (
        typeof discountPercent !== "number" ||
        !Number.isFinite(discountPercent) ||
        discountPercent < 0 ||
        discountPercent > 100
    ) {
        return "Error: Invalid discount";
    }

    return total - (total * discountPercent / 100);
}

console.log("Final Price:", calculateDiscount(700, 10));
