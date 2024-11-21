const inventory = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99, quantity: 5 },
    { id: 2, title: '1984', author: 'George Orwell', price: 8.99, quantity: 12 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99, quantity: 8 },
];

class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}

function displayBooks() {
    inventory.forEach(function(book) {
        console.log(`${book.title} - ${book.author} ($${book.price})`);
    });
}

function addBook(id, title, author, price, quantity) {
    const newBook = new Book(id, title, author, price, quantity);
    inventory.push(newBook);
}

function updateBook(id, newQuantity) {
    const book = inventory.find(function(book) {
        return book.id === id;
    });

    if (book) {
        book.quantity = newQuantity;
    }
}

function updateBookWithMap(id, newQuantity) {
    inventory.map(function(book) {
        if (book.id === id) {
            book.quantity = newQuantity;
        }
    });
}

function removeBook(id) {
    const index = inventory.findIndex(function(book) {
        return book.id === id;
    });

    if (index !== -1) {
        inventory.splice(index, 1);
    } 
}
displayBooks();

addBook(4, 'Brave New World', 'Aldous Huxley', 9.99, 6);
console.log('\n');
displayBooks();

updateBook(2, 15);
console.log('\n');
displayBooks();

updateBookWithMap(3, 10);
console.log('\n');
displayBooks();

removeBook(1);
console.log('\n');
displayBooks();
