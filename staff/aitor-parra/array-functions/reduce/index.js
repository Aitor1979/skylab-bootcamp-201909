function reduce(array, expression) {
    
    if(!(array instanceof Array)) throw TypeError( array + ' is not an Array');
    if(typeof(expression) !== 'function') throw TypeError( expression + ' is not a Function');
    var acum = 0;
    
    for (var i = 0; i < array.length; i++) {
        if (i === 0) {
            expression(acum, array[i], i, array);
            acum = array[i];
        } else {
            acum = expression(acum, array[i], i, array);
        };
    };
    return acum;
};