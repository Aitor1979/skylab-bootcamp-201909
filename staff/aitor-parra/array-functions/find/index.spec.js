describe('find', function(){

    it('should return the value of first element in the provided array that satisfies the provided testing function', function(){

        var array = [2, 4, 6, 8, 10];
        var expression = function(param){ return param > 5}

        var result = find(array, expression);

        var expected = 6

        expect(result).toBe(expected)








    })





})