var str = 'Hello';
var str2 = String('Hello');
 
console.log(str instanceof String); // ‘Hello’ instanceof String is false,
console.log(str2 instanceof String); // ‘Hello’ instanceof String is false,

// In fact, both expressions are false. Because:

// The instanceof operator only works on objects.
// String literal ‘Hello’ is primitive.
// String calls in a non-constructor context (called without using the new keyword) returns a primitive string.