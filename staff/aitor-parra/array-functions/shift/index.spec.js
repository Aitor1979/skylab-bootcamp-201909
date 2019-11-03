describe ('shift', function(){

    it('should succeed on removing first ellement of the array and reutrns thtat removed element', function(){

        var array1 = [2, 4, 6, 8, 10]
        var array2 = ['a', 'b', 'c', 'd', 'e']
    
    
        var result1 = shift(array1)
        var expected1 = 2
        var result2 = shift(array2)
        var expected2 = 'a'
    
        expect(result1).toBe(expected1)
        expect(result2).toBe(expected2)


    });


    it('should fail on an undefined array', function(){
        
        var array;
        expect(function(){shift(array);}).toThrowError(TypeError, array + ' is NOT an array.') 
    });

    it('should fail on array because it has been defined as a string', function(){

        var array = 'a string';
        expect(function(){shift(array);}).toThrowError(TypeError, array + ' is NOT an array.')
    });

    it('should fail on array because it has been defined as a number', function(){
        
        var array = 1;
        expect(function(){shift(array);}).toThrowError(TypeError, array + ' is NOT an array.')
    });

    it('should fail on the array because it has been declared as a function', function(){

        var array = console.log();
        expect(function() {shift(array);}).toThrowError(TypeError, array + ' is NOT an array.')
    });

});

