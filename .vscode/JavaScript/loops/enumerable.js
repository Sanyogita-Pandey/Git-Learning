let obj = {
    name:"ROHIT",
    age:32,
    account:34326,
    balance:420
}
let obj2 = Object.create(obj)
obj2.city="Lucknow"
obj2.place="uttarPradesh"
Object.defineProperty(obj,'name',{
    enumerable:false
})
for(let key in obj2)
    console.log(key);