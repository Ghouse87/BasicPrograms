
const obj = {};
 
Object.defineProperty(obj, 'myCompany', {
 value: 'intspirit'
});
 
console.log(obj.myCompany);
delete obj.myCompany;
console.log(obj.myCompany);
// The method Object.defineProperty() defines a new property on an object, or modifies an existing property on an object.
// By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable.
// An attempt to delete the property will be ignored. And if you run the code in strict mode, you will get an error:
// Therefore, the correct answer to the quiz is intspirit.