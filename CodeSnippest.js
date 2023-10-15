let hindiMarks = "45"
let mathMarks = "90"
hindiMarks = hindiMarks + 20

mathMarks++
++mathMarks

console.log(hindiMarks, mathMarks)

// So First operation is obivious, whenever we do add(+) operation with string,
// JS will concatanate the string.

// But for ++ what went different?

// It's the implementation of ++ and ++, both of these first convert the argument
// to Number and then do a ++.

// function plusplus(number) {
//     const num = Number(number);
//     num = num+1;
//     return num';
// }

const result = [] == ![]
console.log(result)

// true

// Let's break it down.

// Whenever we do a double equality check, JS engine will try to convert both 
// values in Number.

// Number([]) == Number(![]);
// 0 == Number(false); // ![] will give false
// 0 == 0 // true

function magicalFunc() {
    return cosmic = 90000
}

console.log(magicalFunc())

// 90000

// Here if we break down this as,

// const res = cosmic = 90000;
// return res;

// Undeclared cosmic will be added to global scrope and 90000 will be returned.


function count(message) {
    console.log(this.length, message)
}

const data = [count, "Hindi", '100']
data[0]('Hello')

// 3, Hello

// this is pointing to array itself, and the length of array is 3.


function foo1() {
    console.log("A");
    foo2();
    console.log("D");
}

async function foo2() {
    await foo3();
    console.log("C");
}

async function foo3() {
    console.log("B");
}

foo1();

//   Output: A B D C

// Explanation: whatever code we have written after await will run on the microtask queue. 
// As soon as foo3() is executed, next line console.log("C") will be pushed to microtask queue, and once callstack is empty then it will get executed.

setTimeout.call(null, () => console.log("YES"), 3000);

const array = [{ name: 'JS' }, '2', 'Hello'];
delete array[1];

console.log(array.length);

// Explanation: delete operator will delete the element from the array, leaving a empty slot in place of deleted element. 
// In order to delete element prefer to use pop, slice or splice.

fetchA();
let A;

function fetchA() {
    A = 7;
    console.log('fetchA',A);
}

