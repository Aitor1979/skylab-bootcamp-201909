/**
 * Determines if an array includes a provided value, returning true if its true or false if not.
 * 
 * @param {Array} array The array to iterate.
 * @param {value} valor The value to test if its included in the array. 
 * @returns {Boolean} The result of boolean evaluation.
 * 
 * @throws {TypeError} If array is not an array.
 */


function includes(array, value) {

    if (!(array instanceof Array)) throw TypeError(array + ' is NOT an array')
/*     if (typeof value !== 'value') throw TypeError(value + ' is not a correct value') */

    for (var k = 0; k < array.length; k++) {
        if (array[k] === value) {
            //console.log(array[k])
            return true;
        }
    }
    return false;

}