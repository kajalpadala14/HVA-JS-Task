function calculateArea(width,height){
      return width*height;
}
const area= calculateArea(5,10);
console.log(area);

////////////////////////////////////////////////////////
function calculateAreaWithDefaults(width = 1,height=1){
    return width * height;
}
const defaultArea = calculateAreaWithDefaults();
console.log(defaultArea);

const definedArea = calculateAreaWithDefaults(5, 10);
console.log(specifiedArea); 

////////////////////////////////////////////////////////

const calculateAreaFunction = function(width, height) {
    return width * height;
};
const area = calculateAreaFunction(5, 10);
console.log(area); 

////////////////////////////////////////////////////////

const calculateAreaArrow = (width, height) => width * height;

const area = calculateAreaArrow(5, 10);

console.log(area);
