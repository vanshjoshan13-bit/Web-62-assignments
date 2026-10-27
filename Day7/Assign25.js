
let shoppingList = [];

function addItem(item) {
    if (typeof item !== "string" || item.trim() === "") {
        console.log("Please enter a valid item.");
        return;
    }

    shoppingList.push(item.trim());
    console.log(item.trim(), "added successfully.");
}

function removeItem(item) {
    const index = shoppingList.findIndex(
        value => value.toLowerCase() === item.toLowerCase()
    );

    if (index === -1) {
        console.log("Item not found.");
        return;
    }

    const removed = shoppingList.splice(index, 1);
    console.log(removed[0], "removed successfully.");
}

function showList() {
    console.log("\nShopping List:");

    if (shoppingList.length === 0) {
        console.log("Your shopping list is empty.");
        return;
    }

    shoppingList.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

function searchItem(item) {
    const found = shoppingList.some(
        value => value.toLowerCase() === item.toLowerCase()
    );

    console.log(found ? "Item found." : "Item not found.");
}

// Test the shopping-list manager
addItem("Milk");
addItem("Bread");
addItem("Eggs");
showList();

searchItem("Bread");
removeItem("Milk");
showList();
