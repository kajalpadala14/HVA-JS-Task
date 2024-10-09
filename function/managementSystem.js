let inventory = [
    { id: 1, name: 'Laptop', price: 50000, quantity: 10, category: 'Electronics', brand: 'Dell' },
    { id: 2, name: 'Smartphone', price: 30000, quantity: 25, category: 'Electronics', brand: 'Samsung' },
    { id: 3, name: 'Headphones', price: 1500, quantity: 100, category: 'Accessories', brand: 'Sony' },
    { id: 4, name: 'Office Chair', price: 7000, quantity: 15, category: 'Furniture', brand: 'IKEA' },
    { id: 5, name: 'Notebook', price: 50, quantity: 200, category: 'Stationery', brand: 'Classmate' },
    { id: 6, name: 'Printer', price: 12000, quantity: 8, category: 'Electronics', brand: 'HP' },
];

class Product {
    constructor(id, name, price, quantity, brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.brand = brand;
    }
}

function displayProducts(inventory) {
    inventory.forEach(function(product) {
        console.log(`${product.name} - $${product.price} (${product.quantity})`);
    });
}

console.log("Inventory Products:");
displayProducts(inventory);



function addProduct(id,name,price,quantity) {
};