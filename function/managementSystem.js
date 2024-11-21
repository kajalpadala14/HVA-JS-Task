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

function displayProducts() {
    inventory.forEach(function (product) {
        console.log(`${product.name} - $${product.price} (${product.quantity})`);
    });
}

function addProduct(id, name, price, quantity, brand) {
    const newProduct = new Product(id, name, price, quantity, brand);
    inventory.push(newProduct);
}

function updateProduct(id, newQuantity) {
    const product = inventory.find(function (product) {
        return product.id === id;
    });

    if (product) {
        product.quantity = newQuantity;
        console.log(`Updated ${product.name} quantity to ${product.quantity}.`);
    } else {
        console.log('Product not found.');
    }
}

function updateProductWithMap(id, newQuantity) {
    inventory.map(function (product) {
        if (product.id === id) {
            product.quantity = newQuantity;
            console.log(`Updated ${product.name} quantity to ${product.quantity} (using map).`);
        }
    });
}

function removeProduct(id) {
    const updatedInventory = inventory.filter(function (product) {
        return product.id !== id;
    });

    if (updatedInventory.length < inventory.length) {
        console.log('Product removed successfully.');
        inventory = updatedInventory;
    } else {
        console.log('Product not found.');
    }
}

displayProducts();

addProduct(7, 'Desk Lamp', 1200, 20, 'Philips');
console.log('\nadding Desk Lamp:');
displayProducts();

updateProduct(2, 30);
console.log('\n updating Smartphon');
displayProducts();

updateProductWithMap(3, 90);
console.log('\npdating Headphones using map:');
displayProducts();

removeProduct(5);
console.log('\n removing Notebook:');
displayProducts();
