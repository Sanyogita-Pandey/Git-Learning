// let obj = {}
// obj.name = "Rohit"
// console.log(obj)
// // key value writeable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// // writeable = true, means we can change the value
// obj.name="MOHit"
// configurable=true, means we can change the value of writable and enumerable
let obj = {}
Object.defineProperty(obj,'name',{
    value:"ROHIT",
    Writable:true,
    enumerable:true,
    cinfigurable:true
})
const obj1={
    naam:"ROHIT",
    age:23,
    account_number:300,
}
Object.defineProperty(obj1,'account_number',{
    writable:false
})
obj1.account_number = 2001
console.log(obj1.account_number)