/**
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 * 
 * @param {Array} array The array to iterate.
 * @returns {number} The new length of the array.
 */

function unshift(array, param) {
    if (!(array instanceof Array)) throw TypeError(array + ' is NOT an array.')

    var newarray = [];

    var j = 1
    for (var i = 0; i < array.length; i++) {
        newarray[j] = array[i]
        j++
    }
    newarray[0] = param;

    for (z = 0; z < newarray.length; z++) {

        array[z] = newarray[z];
    }
    
    var value = newarray.length;
    
    return value
}