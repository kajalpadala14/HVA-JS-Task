
const number1 = 5;
const number2 = 3;
function addNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return 'Division by zero is not allowed';
    }
    return num1 / num2;
}

function performArithmetic(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(performArithmetic(number1, number2, addNumbers));        
console.log(performArithmetic(number1, number2, multiplyNumbers)); 
console.log( performArithmetic(number1, number2, subtractNumbers));   
console.log(performArithmetic(number1, number2, divideNumbers));   
