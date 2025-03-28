// key value pair:key should be unique
const map1= new Map()
map1.set(3,9)
map1.set("Rohit",45)
// map1.set("Rohit",40) : value ko udpate krega
console.log(map1)
// delete
map1.delete(3)
// has
console.log(map1.has("Rohit"))
// size
console.log(map1.size)
// clear
map1.clear()
console.log(map1)
// second way to create
const map2 = new Map([[4,"Rohit"],["mohan","rohan"],[30,9],["Ajay",8]])
console.log(map2)
// iterate
for(let value of map2)
    console.log(value)
