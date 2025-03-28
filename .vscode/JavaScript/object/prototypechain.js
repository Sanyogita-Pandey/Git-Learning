let user1={
    name:"Mohit",
    course:"Btech",
    rollo_No:2310013135102
}
let user2={
    trade:"Computer Science",
    section:2
}
console.log(user2.name)
// inherits the properties
// array inherits the properties from object.prototype[']
// user2.__proto__=user1;
user2=Object.create(user1)
console.log(user2.name)

let arr=[10,20,30,40]
console.log(arr.__proto__==Array.prototype)
console.log(arr.__proto__.__proto__==Object.prototype)
console.log(arr.__proto__.__proto__.__proto__==null)