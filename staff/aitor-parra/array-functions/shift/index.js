/**
 * Remove and returns the first element of an array. The array length is modified.
 * 
 * @param {Array} array The array to iterate.
 * @returns {value} The removed element of the array
 */


function shift(array) {
    if(!(array instanceof Array)) throw TypeError(array + ' is NOT an array.')
    var value = array[0]
    for (var i = 0; i < array.length ; i++){
            array[i] = array[i+1];           
}
    array.length = array.length-1
    return value   
}

