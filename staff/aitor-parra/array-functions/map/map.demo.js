console.log('DEMO map');

var array = [7, 8, 9, 17, 39, 6];
var array1 = ["A", "B", "C"];

console.log('should return a new array with each value multiplied by 2')

map(array, expression1)
function expression1(){
    return element * 2;
}

console.log('should return a new array with each value minus 1')

map(array, expression2)
function expression2(){
    return element - 1;
}

console.log('should return a new array with each value witn a prefix of "Num: "')

map(array, expression3)
function expression3(){
    return element + "Num: ";
}
