const fs = require("fs");
const path = require("path");

try {
    const filePath = path.join(__dirname, "catalogue.json");
    const data = fs.readFileSync(filePath, "utf8");
    const catalogueData = JSON.parse(data);

    const products = catalogueData.catalogue;

    if (!Array.isArray(products)) {
        throw new Error("'catalogue' must be an array.");
    }

    // Find product by ID
    function findProduct(id) {
        return products.find(product => product.id === id);
    }

    // Filter products by category
    function filterByCategory(category) {
        return products.filter(
            product =>
                product.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Calculate total catalogue value
    function calculateTotal() {
        return products.reduce(
            (total, product) => total + product.price,
            0
        );
    }

    // Get available products
    function getAvailableProducts() {
        return products.filter(product => product.inStock);
    }

    console.log("Product ID 2:", findProduct(2));
    console.log("Electronics:", filterByCategory("Electronics"));
    console.log("Total Catalogue Value: ₹" + calculateTotal());
    console.log("Available Products:", getAvailableProducts().length);
    console.log("Missing Product:", findProduct(99));

} catch (error) {
    console.log("Error:", error.message);
}