function areaOfRectangle(length, width) {
    return length * width;
}
function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}
function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}

function calculatePaintingCost(dimension1, dimension2, calculateArea) {
     const area = calculateArea(dimension1, dimension2);
     const costPerUnit = 2;
     const totalCost = area * costPerUnit;
    return totalCost;
}
    
const rectangleCost = calculatePaintingCost(5, 10, areaOfRectangle);
console.log(`Painting cost for rectangle: $${rectangleCost}`);
const circleCost = calculatePaintingCost(3, null, areaOfCircle);
console.log(`Painting cost for circle: $${circleCost}`);
const triangleCost = calculatePaintingCost(6, 8, areaOfTriangle);
console.log(`Painting cost for triangle: $${triangleCost}`);
