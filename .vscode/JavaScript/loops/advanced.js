let obj={
    name:"ROHAN",
    age:30,
    gender:"MALE",
    city:"KOTDWAR",

}
let obj2 = Object.create(obj);
obj2.money=420,
obj2.id="ROH"
// it only return the keys in obj2
console.log(Object.keys(obj2))
// but this will return the keys in both obj and obj2
for(let key in obj2){
    console.log(key)
}