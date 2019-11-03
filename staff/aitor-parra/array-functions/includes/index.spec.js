describe ('includes', function(){

    it('it should succeed on return true if value is included on array, or false if not', function(){

        var array = [1, 2, 3, 4, 5];
        var value1 = 3;
        var value2 = 7;
        var value3;
        var result1 = includes(array, value1)
        var result2 = includes(array, value2)
        var result3 = includes(array, value3)


        expect(result1).toBe(true)
        expect(result1).toBeTrue()
        

        expect(result2).toBe(false)
        expect(result2).toBeFalse()

        expect(result3).toBe(false)
        expect(result3).toBeFalse()
    });

    it('should fail on undefined array' , function(){

        var array; 
        expect(function() {includes(array);}).toThrowError(TypeError, array + ' is NOT an array')
    });

    it('should fail on the array because it has been defined as a string', function(){

        var array = 'a string';
        expect(function() {includes(array);}).toThrowError(TypeError, array + ' is NOT an array')
    });

    it('should fail on the array because it has been defined as a number', function(){

        var array = 1;
        expect(function() {includes(array);}).toThrowError(TypeError, array + ' is NOT an array')
    });


    it('should fail on the array because it has been declared as a function', function(){

        var array = console.log();
        expect(function() {includes(array);}).toThrowError(TypeError, array + ' is NOT an array')
    });

});