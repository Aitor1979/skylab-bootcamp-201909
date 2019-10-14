console.log('DEMO includes');

console.log(includes(array))

var array = ["a", "b", "c"];

console.log('should evaluate if the array cointains the specified element and return "true", or "false" if not.')
console.log(includes(array, "f")); // "false"
console.log(includes(array, "b")); // "true"


console.log('CASE should throw array is not defined');
try {
    includes(5, "string")

} catch(error) {
    console.error()
}

