// let student = {};

// student.name = "kajalpadala";
// student.email = "kajalpadala23@navgurukul.org";
// student.age = 20;

// console.log(student.name);

// student.age = 10;
// console.log(student.age);

// student.greet = function () {
//     console.log(`Hello, ${this.name}!`);
// };

// student.greet();

// student.address = {
//     country: "India",
//     city: "Bijapur",
//     pin_code: 494444
// };

// console.log("Country:", student.address.country);

// student.address.pin_code = 495001;
// console.log("Updated Address Object:", student.address);

// let friend = {
//     name: "xyz",
//     email: "xyz@gmail.com",
//     age: 20,
//     address: {
//         country: "India",
//         city: "Raipur",
//         pin_code: 492001
//     },
//     greet: function () {
//         console.log(`Hello, ${this.name}!`);
//     }
// };

// friend.greet();
// console.log("Friend Object:", friend);

let topper = {
    name: "abc",
    email: "abc@gmail.com",
    age: 20,
    address: {
        country: "India",
        city: "Raipur",
        pin_code: 492001
    },
    greet: function () {
        return `Hello, ${this.name}!`;
    },
};

topper.greet_message = topper.greet();

console.log("Topper Object:", topper);



// class Student {
//     constructor(name, email, age, country, city, pin_code) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.address = {
//             country: country,
//             city: city,
//             pin_code: pin_code
//         };
//     }

//     greet() {
//         return `Hello, my name is ${this.name}.`;
//     }

//     getFullAddress() {
//         return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
//     }
// }

// const myself = new Student('Kajal', 'kajal@gmail.com', 20, 'India', 'Bijapur', '494001');
// const friendStudent = new Student('Akash', 'akash@gmail.com', 22, 'India', 'Bangalore', '560038');
// const anotherStudent = new Student('Rani', 'rani@gmail.com', 20, 'India', 'Delhi', '110001');

// console.log(myself.greet());
// console.log(friendStudent.greet());
// console.log(anotherStudent.greet());
// console.log(friendStudent.getFullAddress());
// console.log(anotherStudent.getFullAddress());
