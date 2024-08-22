
function doubleNumber(num){
     return num * 2;
}
function squareNumber(num){
     return num **2;
}
function incrementNumber(num){
     return num+1;
}
function performOperation(num,opration){
    return opration(num);
}
const num =5;
console.log('Double:', performOperation(number, doubleNumber));  
console.log('Square:', performOperation(number, squareNumber));  
console.log('Increment:', performOperation(number, incrementNumber));  
