
const products = [
    { name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { name: "Phone", category: "Electronics", price: 20000, stock: 10 },
    { name: "Shirt", category: "Clothing", price: 800, stock: 20 },
    { name: "Shoes", category: "Clothing", price: 1500, stock: 8 },
    { name: "Headphones", category: "Electronics", price: 2000, stock: 0 }
];

// 1. Filter products costing less than 25000
const affordableProducts = products.filter(
    product => product.price < 25000
);

console.log("Affordable Products:");
console.log(affordableProducts);

// 2. Get product names
const productNames = products.map(product => product.name);

console.log("\nProduct Names:");
console.log(productNames);

// 3. Calculate total product value in stock
const totalStockValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
);

console.log("\nTotal Stock Value:", totalStockValue);

// 4. Find products that are out of stock
const outOfStock = products.filter(product => product.stock === 0);

console.log("\nOut of Stock Products:");
console.log(outOfStock);

// 5. Calculate the number of products in each category
const categoryCount = products.reduce((result, product) => {
    result[product.category] = (result[product.category] || 0) + 1;
    return result;
}, {});

console.log("\nCategory Count:");
console.log(categoryCount);
