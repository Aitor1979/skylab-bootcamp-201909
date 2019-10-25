/**
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to test each item of the array.
 * 
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */

function filter(array, expression) { 	

    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (typeof expression === true) throw TypeError(expression + 'is not a function');
    if (typeof expression === 1) throw TypeError(expression + 'is not a function');

    var newArray = [];
    var boleano;
    var j = 0;
	for (var i = 0; i < array.length; i++) {    
        boleano = expression(array[i])   
        if (boleano) {
            newArray[j]=array[i]
            j++
        }           
    }
    return newArray;
}
