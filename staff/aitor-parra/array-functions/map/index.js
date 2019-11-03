/**
 * Iterates an array and returns a new array with the results of calling 
 * a provided function on every element in the calling array. 
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array. 
 * 
 * 
 */

function map(array, expression) {
     var newArray = [];
     counter = 0;
     for (var i = 0 ; i < array.length ; i++){
        expression(array[i]) = newArray[i]}
        counter++;
        return newArray;
   
}

/* function condition1(element) {
    return element * 2;
} */

/* var array1 = [1, 4, 9, 16]; */

// pass a function to map
/* const map1 = array1.map(x => x * 2);

console.log(map1); */
// expected output: Array [2, 8, 18, 32]