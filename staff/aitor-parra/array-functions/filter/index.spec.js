describe ('filter', function (){

    it('it should succeed on create a new array with all elements that pass the test implemented by the provided function', function() {
        var array = [1, 2, 3, 4, 5];
        var expression = function(currentValue) { return currentValue >= 3;}
        var result = filter(array, expression);

        /* function expression (number) {return number >= 3;} */;
        
        var expected = [3, 4, 5];
        expect(expected).toEqual(result);

        expect(result).toBeInstanceOf(Array);
        expect(result).not.toBe(array);
        expect(result.length).toBe(3);
        expect(array.length).toBe(5)

 

    });

it('it should fail on undefined array', function() {
    var array; /* [1, 2, 3, 4, 5]; */
    var expression = function(currentValue) { return currentValue >= 3;}

    expect(function() { filter(array, expression); }).toThrowError(TypeError, 'undefined is not an array');

    });


it('it should fail on undefined expression', function(){
    var array = [1, 2, 3, 4, 5];
    var expression;
    
    expect(function() { filter(array, expression); }).toThrowError(TypeError, 'undefined is not a function')

    });


it('it should fail on non-function expression', function(){
    var array = [1, 2, 3, 4, 5];
    
    expect(function() { filter(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
    expect(function() { filter(array, 1); }).toThrowError( '1 is not a function');
    expect(function() { filter(array, true); }).toThrowError( 'true is not a function');

});

}); 

