// obj: {
//     console.log(hello)
// }

// hello is not defined

let value1 = 2
let value2 = 4
value1 *= value1 + value2 * value2 / value1
console.log(value1)

function getY(){
    y = 7
    console.log(y)
}
let y
getY()

//

let animals = [{type: 'lion'}, 'tiger']
let clones = animals.slice()
console.log(clones)
clones[0].type = 'bear'
clones[1] = 'sheap'
console.log(animals[0].type, clones[0].type)
console.log(animals[1], clones[1])
