const sum=(num1, num2)=>{
    return num1+num2
}
console.log(sum(3,5))
// const sum=(num1, num2)=> num1+num2
// console.log(sum(3,5))
const cube=number=>number*number*number
console.log(cube(8))
const sum2 = function(...num3){
    console.log(num3)
}
sum2(3,4,5)
sum2(1,34,325,466,78,8)

let obj={
    name:"Rohit",
    age:30,
    amount:420
}
function fun(obj1){
    console.log(obj1.name,obj1.amount)
}
fun(obj)