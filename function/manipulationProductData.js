let products = [
    { id: 101, name: "Apple", price: 3.00, catagory: "Food" },
    { id: 102, name: "Bird", price: 3.5, catagory: "Toy" },
    { id: 103, name: "Kurta", price: 5.5, catagory: "Clothe" },
    { id: 104, name: 'Milk', price: 2.50, category: 'Dairy' }
];




function displayProducts(products) {
    products.forEach(function (product) {
        console.log(`${product.name} - $${product.price}`);
    });
}
console.log("Products without Tax:");
displayProducts(products);


let taxRate = 0.10;

let productsWithTax = products.map(function (product) {
    return {
        id: product.id,
        name: product.name,
        category: product.category,
        price: (product.price * (1 + taxRate)).toFixed(2)
    };
});

console.log("\nProducts with Tax:");
displayProducts(productsWithTax);


let foodProducts = products.filter(function (product) {
    return product.category === 'Food';
});

console.log("\nFood Products:");
displayProducts(foodProducts);


let affordableProducts = products.filter(function (product) {
    return product.price < 10;
});

let affordableProductsStrings = affordableProducts.map(function (product) {
    return `${product.name} - $${product.price}`;
});


console.log("\nAffordable Products:");
console.log(affordableProductsStrings);

let totalPrice = 0;

products.forEach(function (product) {
    totalPrice += product.price;
});

console.log("\nTotal Price of All Products: $" + totalPrice.toFixed(2));
