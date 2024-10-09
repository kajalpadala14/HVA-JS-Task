let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Phone", price: 120000, quantity: 1 },
    { name: "Charger", price: 1000, quantity: 2 },
    { name: 'Headphones', price: 1500, quantity: 3 },
];

function calculateTotalPrice(cart) {
    let totalPrice = 0;

    cart.forEach(function(product){
        totalPrice += product.price * product.quantity;
    });
    return totalPrice;
}
console.log(calculateTotalPrice(cart));
