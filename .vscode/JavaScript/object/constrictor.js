class people{
    constructor(na, ag, gen){
        this.name= na
        this.age = ag
        this.gender = gen

    }
}
let per1 = new people("Rohit",20,"Male")
console.log(per1)
let obj = {
    name:"Rohit",
    section:2,
    course:"Btech",
    trade:"Computer Science"
}
// prints the keys
const arr = Object.keys(obj)
console.log(arr)
// prints the values
const arr1 = Object.values(obj)
console.log(arr1)
// prints keys and values both
const arr2=Object.entries(obj)
console.log(arr2)