// Assignment 30: Product Object

const product = {
    id: 101,
    name: "Laptop",
    brand: "HP",
    price: 55000,
    inStock: true,

    specifications: {
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        screenSize: "15.6 inches"
    },

    warranty: {
        duration: 2,
        unit: "years"
    }
};

// Display product details
console.log("Product Name:", product.name);
console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Processor:", product.specifications.processor);
console.log("RAM:", product.specifications.ram);
console.log("Storage:", product.specifications.storage);
console.log("Warranty:", product.warranty.duration,
    product.warranty.unit);

// Update product price
product.price = 52000;
console.log("Updated Price:", product.price);