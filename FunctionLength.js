
function foo(a, b, c = 3, d) {
    console.log(foo.length);
}

function foo1(a, b, c) {
    console.log(foo1.length);
}

foo(1, 2, 3, 0); // This function has default value so number of parameters will be considered before def
// default value assiged so a, b, c = 3, d,  length = 2    a = 0, b, c = 3, d,  length = 0
foo1(1, 2, 3); // This will give 3 because function length gives the number of parameters length