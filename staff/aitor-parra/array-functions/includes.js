/**
 * 
 * @param {Array} array 
 * @param {value} valor 
 * 
 * @throws {TypeError} If array is not an array.
 */





function includes(array, value) {

    if (!(array instanceof Array)) throw TypeError(array + ' is NOT an array')
    //if (typeof parameter !== 'value') throw TypeError(parameter + ' is not a value')

    for (var k = 0; k < array.length; k++) {
        if (array[k] === value) {
            //console.log(array[k])
            console.log(value);
            return true;
        }
    }
    console.log(value);
    return false;

}