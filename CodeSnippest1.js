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
clones[0].type = 'bear' // this is shallow copy as it changes the value of original object
clones[1] = 'sheap' // this is deep copy this will not change the value of original object
console.log(animals[0].type, clones[0].type)
console.log(animals[1], clones[1])

let cat = Object.create({ type: 'lion' })
cat.size = 'large'
let copyCat = { ...cat }
cat.type = 'tiger'
console.log(cat)

// let object = Object.create(targetObject)

let channel = { name: "get to the point" }
channel.content = channel
// console.log(JSON.stringify(channel)) this will throw circular reference error

if (null){
    console.log('true')
} else {
    console.log('false')
}

if (undefined){
    console.log('true')
} else {
    console.log('false')
}
