function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.forEach = function(expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	//throw Error('🤡');
	for (var i = 0; i < this.length; i++) 
		expression(this[i], i, this);
};

/**
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function() { 
	for (var i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
};


/**
 * Remove the last element of an array, and return that removed element.
 * 
 * @param {Arguments} arguments The object to pop element.
 * 
 * @returns {j} The value of removed element.
 * 
 */

Hooray.prototype.pop = function pop() {

    var j = this[this.length-1];
		delete this[this.length-1]
		this.length = this.length-1;

        return j;
    }


/* function pop(array) {
    var j = array[array.length-1];
        array.length = array.length-1;
        return j;
    }


var array = [1,2,3] */