/**
 * Remove the last element of an array, and return that removed element.
 * 
 * @param {Array} array The array to remove elements for.
 * @param {Variable} j The variable that stores the removed element.
 * 
 * @returns {Element} The value of removed element.
 * 
 */

function pop() {
    var j = array[array.length-1];
        array.length = array.length-1;
        return j;
    }


var array = [1,2,3]

