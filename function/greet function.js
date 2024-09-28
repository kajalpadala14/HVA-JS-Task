
let name=input.question();
function greet(name){
         return name
}
console.log("Hello "+greet(name));


function greetDefault(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greetDefault());


const greetFunction = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetFunction("kajal"));


const greetArrow = (name) => {
    return `Hello, ${name}!`;
};

console.log(greetArrow("kajal"));


