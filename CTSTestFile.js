
function getKeyValue(object) {
    // Code here
    let arr = []
    const keys =  Object.keys(object)
    keys.forEach(element => {
        const arr1 = []
        const value = object[element]
        console.log(element)
        if (typeof(value) !== 'object'){
            arr1.push(element)
            arr1.push(object[element])
            arr.push(arr1)
        } else {
            arr.push(...getKeyValue(value))
        }
    });

  return arr
}

function createCopy(targetObject) {
   let childObject = targetObject
   childObject.id = 24
   console.log(childObject)
      
   let object = Object.create({ id: 23, name: "Jacob"})
   console.log(object, targetObject)

}
// var data = { id: 23, name: "Jacob", link: { rel: "self", link: "www.abc.com", }, company: { data: { id: 1, ref: 324 } } };
// console.log(getKeyValue(data)); // [["id",23],["name","Jacob"],["rel","self"],["link","www.abc.com"],["id",1],["ref",324]]

createCopy({ id: 23, name: "Jacob"})