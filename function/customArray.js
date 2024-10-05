function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
const numbers = [1, 2, 3, 4];
forEachArray(numbers, (element) => {
    console.log(element);
});


function mapArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
const doubled = mapArray(numbers, (element) => element * 2);
console.log(doubled);



function filterArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
const evenNumbers = filterArray(numbers, (element) => element % 2 === 0);
console.log(evenNumbers);