describe('map', function(){
    it('it should returns a new array with the result of calling a function on every element in the calling array', function(){

        var array = [1, 2, 3, 4, 5];
        var expression = function(currentValue) { return currentValue * 2;}
        var result = map(array, expression);

        var expected = [2, 4, 6, 8, 10];

        expect(result).toBe(expected)
        expect(array.length).toBe(5)
        /* expect() */

    });

});


/* describe('push', function () {
    it('should push a single item', function () {
        var array = ['a', 'b', 'c'];

        expect(push(array, 'd')).toBe(4);
        expect(array.length).toBe(4);
        expect(array[array.length - 1]).toBe('d');

        var expected = ['a', 'b', 'c', 'd'];
        expect(array).toEqual(expected);
    });

    it('should push multiple items', function () {
        var array = ['a', 'b', 'c'];

        expect(push(array, 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
        expect(array.length).toBe(11);

        var expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
        expect(array).toEqual(expected);
    });
}); */