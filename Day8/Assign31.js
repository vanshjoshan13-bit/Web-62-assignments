// Assignment 31: Shopping Cart

const cart = {
    items: [],

    addItem(name, price, quantity) {
        if (price <= 0 || quantity <= 0 ||
            !Number.isInteger(quantity)) {
            console.log("Invalid price or quantity.");
            return;
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });

        console.log(name, "added to cart.");
    },

    calculateTotal() {
        return this.items.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    },

    showCart() {
        console.log("Cart Items:", this.items);
        console.log("Total Amount: ₹" + this.calculateTotal());
    }
};

// Test cases
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1000, 0);

cart.showCart();