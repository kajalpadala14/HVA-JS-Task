let people = [  
    { name: 'Kajal', age: 21 },
    { name: 'Avika', age: 23 },
    { name: 'Priya', age: 22 },
    { name: 'Rahul', age: 25 }
];
function calculateAverageAge(people) {
    let totalAge = 0;

    people.forEach(function(person){
        totalAge += person.age
    });
    
    let averageAge = totalAge / people.length
    return averageAge;
}
console.log(calculateAverageAge(people));
