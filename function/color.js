let colors = ["red","green","blue","grey","yellow"]
// console.log(colors[0]);

colors [1] = "yellow"
// console.log(colors[1]);

colors.push("pink");
// console.log(colors[colors.length-1]);

// iterate using for loop

for(let i = 0; i<colors.length;i++){
    // console.log(colors[i]);
}

//iterate using while loop

 i = 0
 while (i < colors.length) {
    // console.log(colors[i]);
    i++
 }
 
 //iterate using for - in loop

 for (const color of colors) {
    // console.log(color);

    
 }
 //iterate using for....in loop
 for (const color in colors) {

    // console.log(color);
    
 }

  for (const color of colors) {
    // console.log(typeof color);
    
 }

//  console.log(colors.length);
 
 let addColor =colors.push("purple")
 console.log(colors);

 let removeColor = colors.pop()
 console.log(colors);
 
console.log(colors.indexOf("blue"));

colors.owner = "Kajal";
console.log(colors);

for (let property in colors) {
    console.log(`${property}: ${colors[property]}`);
  }