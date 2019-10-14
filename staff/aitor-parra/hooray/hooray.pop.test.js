describe('Hooray.prototype.pop', function() {
    it('should remove the last item of the array', function(){

        var hooray = new Hooray('a','b','c'); 

        expect(hooray.pop()).toBe('c');
        expect(hooray.length).toBe(2);
        expect(hooray[hooray.length - 1]).toBe('b            ');

        var chars = ['a', 'b', 'c', 'd'];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);

    });










});