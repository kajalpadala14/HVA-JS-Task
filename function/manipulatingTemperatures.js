let temperatures =[-3,14,27,17,5,-10];

temperatures.forEach(function(celsius){
    // console.log(celsius);                                      
});

temperatures.forEach(temperature =>{
    // console.log(temperature);
});

temperatures.forEach(function(temperature){
    let fahrenheit =(temperature * 9/5)+32;
    // console.log(fahrenheit);
    
})

temperatures.forEach(temperature =>{
    let fahrenheit = (temperature * 9/5)+32;
    // console.log(fahrenheit);
})

//Iterate and Create a New Modified Array Using map():

let temperaturesInFahrenheit = temperatures.map(function(temperature) {
    return (temperature * 9 / 5) + 32;  
});

// console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperatures.map(temperature =>{
    return (temperature * 9 / 5) + 32;  
});
console.log(temperaturesInFahrenheit);

let belowFreezing = temperatures.filter(function(temperature){
    return temperature < 0;
});
console.log(belowFreezing);

belowFreezing = temperatures.filter(temperature => {
    return temperature < 0;
});
console.log(belowFreezing);


