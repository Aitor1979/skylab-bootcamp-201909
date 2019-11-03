describe('unshift', function () {


    it('should return the new length of the array', function () {

        var array = [2, 4, 6, 8, 10];
        var param = 17;
        var result = unshift(array, param);
        var expected = 6;

        expect(result).toBe(expected)
        expect(array.length).toEqual(6)
    })

    it('should add the element provided to the beginning of the provided array', function () {

        var array = [2, 4, 6, 8, 10];
        var param = 17;
        var result = unshift(array, param);
        var expected = [17, 2, 4, 6, 8, 10];

        expect(array).toEqual(expected)
        expect(array[0]).toEqual(param)
    })

    it('should fail on undefined array', function () {

        var array;
        expect(function () { unshift(array); }).toThrowError(TypeError, array + ' is NOT an array.')
    });

    it('should fail on the array because it has been defined as a string', function () {

        var array = 'a string';
        expect(function () { unshift(array); }).toThrowError(TypeError, array + ' is NOT an array.')
    });

    it('should fail on the array because it has been defined as a number', function () {

        var array = 1;
        expect(function () { unshift(array); }).toThrowError(TypeError, array + ' is NOT an array.')
    });


    it('should fail on the array because it has been declared as a function', function () {

        var array = console.log();
        expect(function () { unshift(array); }).toThrowError(TypeError, array + ' is NOT an array.')
    });

})