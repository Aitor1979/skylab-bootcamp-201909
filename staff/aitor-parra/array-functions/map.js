/**
 * Iterates an array and returns a new array with the results of calling 
 * a provided function on every element in the calling array. 
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array. 
 * 
 * 
 */

array = [1, 9, 17, 33, 39]


function map1(array,expression) {
     var newArray = [];
     conter = 0;
     for (var i = 0 ; i < array.length ; i++){
        expression(array[i]) = newArray[i]}
        counter++;
        return newArray;
        
     

     
}

function condition1(element) {
    return element * 2;
}