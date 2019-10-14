describe('reduce', function () {

    it('suma', function () {
        var array = [1, 2, 3, 4, 5];
        var result = 15;
        var indexReduce = [];
        var resultIndex = [0, 1, 2, 3, 4];
        var arrayReduce;

        function callback(acc, cur, idx, array) {
            indexReduce[idx] = idx;
            arrayReduce = array;

            return acc + cur;
        };
        
        var resultReduce = reduce(array, callback)
        
        expect(resultReduce).toBeDefined();
        expect(result).toBe(resultReduce);
        expect(resultIndex).toEqual(indexReduce);
        expect(array).toEqual(arrayReduce);

    });
    it('resta', function () {
        var array = [1, 2, 3, 4, 5]
        var result = -13;
        var resultReduce = reduce(array, function (acc, cur) {
            return acc - cur;
        });

        expect(resultReduce).toBeDefined();
        expect(result).toBe(resultReduce);
    });
    it('mult', function () {
        var array = [1, 2, 3, 4, 5];
        var result = 120;
        var resultReduce = reduce(array, function (acc, cur) {
            return acc * cur;
        });

        expect(resultReduce).toBeDefined();
        expect(resultReduce).toBe(result);
    });
    it('div', function () {
        var array = [1, 2, 3, 4, 5];
        var result = 0.008333333333333333;
        var resultReduce = reduce(array, function (acc, cur) {
            return acc / cur;
        });

        expect(resultReduce).toBeDefined();
        expect(resultReduce).toBe(result);
    });
    it('throw array', function () {
        var noArray;
        function callback(acc, cur) {
            return acc / cur;
        };

        expect(function () { reduce(noArray, callback) }).toThrow();
        expect(function () { reduce(noArray, callback) }).toThrowError(TypeError, noArray + ' is not an Array');
    });
    it('throw callback', function () {
        var array = [1, 2, 3, 4, 5];
        var callback;

        expect(function () { reduce(array, callback) }).toThrow();
        expect(function () { reduce(array, callback) }).toThrowError(TypeError, callback + ' is not a Function');
    });

});