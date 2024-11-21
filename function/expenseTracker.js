const expenses = [
    { id: 1, name: 'Groceries', amount: 1500, date: '2024-10-15', category: 'Food' },
    { id: 2, name: 'Utilities', amount: 3000, date: '2024-10-15', category: 'Bills' },
    { id: 3, name: 'Rent', amount: 15000, date: '2024-10-15', category: 'Housing' },
];

class Expense {
    constructor(id, name, amount, date, category) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
        this.category = category;
    }
}

function displayExpenses() {
    expenses.forEach(function (expense) {
        console.log(`${expense.name} - $${expense.amount} (${expense.date})`);
    });
}

function addExpense(id, name, amount, date, category) {
    const newExpense = new Expense(id, name, amount, date, category);
    expenses.push(newExpense);
}

function updateExpense(id, newAmount) {
    const expense = expenses.find(function (expense) {
        return expense.id === id;
    });

    if (expense) {
        expense.amount = newAmount;
    }

}

function updateExpenseWithMap(id, newAmount) {
    expenses.map(function (expense) {
        if (expense.id === id) {
            expense.amount = newAmount;
        }
    });
}

function removeExpense(id) {
    const index = expenses.findIndex(function (expense) {
        return expense.id === id;
    });

    if (index !== -1) {
        expenses.splice(index, 1);
    }
}

displayExpenses();

addExpense(4, 'Transportation', 2000, '2024-10-15', 'Travel');
console.log('\n adding Transportation:');
displayExpenses();

updateExpense(2, 3500);
console.log('\nupdating Utilities:');
displayExpenses();

removeExpense(1);
console.log('\n removing Groceries:');
displayExpenses();
