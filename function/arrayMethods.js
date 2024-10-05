numbers = [1,2,3,5,4,6,7]

// forEach Method
numbers.forEach(function(number){
    console.log(number);
});

// numbers.forEach(function(number){
//     console.log(number * 2);
    
// });

//map Method

// let squaredNumbers = numbers.map(function(number){
//     return number * number;
    
// })
// console.log(squaredNumbers);

let squaredNumbers = numbers.map(number => number * number); 

console.log(squaredNumbers);

let evenNumbers = numbers.filter(function(number){
    return number % 2 === 0; 
});
console.log(evenNumbers);

evenNumbers = numbers.filter(number => number % 2 ===0);
console.log(evenNumbers);


