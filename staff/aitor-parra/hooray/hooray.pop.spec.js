describe('Hooray.prototype.pop', function() {
    it('should remove the last item of the array', function(){

        var hooray = new Hooray('a','b','c'); 

        var lastElement = hooray.pop();

        expect(lastElement).toBe('c');
        expect(hooray.length).toBe(2);
        //expect(hooray[hooray.length - 1]).toBe('c');

        var chars = ['a', 'b'];
        for (var i = 0; i < chars.length; i++)
            expect(hooray[i]).toBe(chars[i]);

    });

});


