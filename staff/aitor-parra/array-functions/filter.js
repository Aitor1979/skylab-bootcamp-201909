function filter(array, expression) {
    var newArray = [];
    var count = 0;
    for (var i = 0 ; i < array.length ; i++) {
        if (expression(array, i)) {
            newArray[count] = array[i];
            count++;
        }

    }
return newArray;
}