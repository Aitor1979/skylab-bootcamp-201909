/**
 * Remove the last element of an array, and return that removed element.
 * 
 * @param {Array} array The array to remove elements for.
 * @param {Variable} j The variable that stores the removed element.
 * 
 * @returns {Element} The value of removed element.
 * 
 */

function pop(array) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var j = array[array.length-1];
        array.length = array.length-1;
        return j;
    }




/**
 * 
 * @param {*} array The array to delete elements to.
 * 
 * @returns {deletedElement} value of last array.
 */
/* 
function pop(array) { 
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    var deletedElement = array[array.length - 1]
    array.length = array.length - 1;
    
    return deletedElement;
} */

