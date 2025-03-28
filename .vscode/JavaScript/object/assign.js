// assign is used to combine the objects but changes the first object also but not the second object
const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}
const obj3= Object.assign({},obj1,obj2);
console.log(obj3,obj1,obj2)

// spread operator
 const obj4 = {...obj1,...obj2}
 console.log(obj4)
