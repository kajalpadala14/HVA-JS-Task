class Employee {
    constructor(name, email, age, department, position, salary) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
    introduce() {
        console.log(`Hello, I am ${this.name}, ${this.position}`);
    }
    displaySalary() {
        console.log(`Salary: $${this.salary}`);
    }
}

const employee1 = new Employee('kajal padala', 'kajalpadala23@navgurukul.org', 20, 'HR', 'Manager', 60000);
employee1.introduce();
employee1.displaySalary(); 

const employee2 = new Employee('Anna', 'anna@example.com', 32, 'HR', 'HR Manager', 6000);
employee2.introduce(); 
employee2.displaySalary();


let newEmployee = {
    "full name":  "kajal padala",
    email:"kajalpadala23@navgurukul.org",
    age: 20,
    department:"IT",
    position:"Software Developer",
    salary: 50000,
    introduce: function() {
        console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`);
    },
    displaySalary: function() {
        console.log(`My salary is $${this.salary}.`);
    }
};
console.log("New Employee:",newEmployee);
newEmployee.introduce();
newEmployee.displaySalary();
// console.log(newEmployee["full name"]);

let manager ={
    name:  "Geetashree",
    email:"geetashree23@navgurukul.org",
    age: 32,
    department:"IT",
    position:"Team Manager",
    salary: 80000,
    introduce (){
        console.log(`Hello, my name is ${this.name} and I am a ${this.position}.`)
    },
    displaySalary: function() {
        console.log(`My salary is $${this.salary}.`);
    }
}
console.log('Manager:', manager);
manager.introduce();
manager.displaySalary();

let student = Object.create(manager)
console.log(student);
