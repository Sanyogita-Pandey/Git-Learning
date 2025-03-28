for(let i=0; i<7; i++){
    console.log(`${i}.`,"HELLO CODER ARMY")
}
// var have acccess outside the function also and before decalaration also thats whys we dont use that
// global scope: elements outside the loops,functions have access anywhere
// local scope(functional scope): elements inside the function have access only inside the function
// block scope: elements inside the loops have only access in the loops

// while loop
let i=1
while(i<6){
    console.log(i)
    i++
}

let obj={
    name:"ROHIT",
    age:30,
    anmount:420,
    city:"LUCKNOW"

}
// for in loop ko array ke sath nhi lete h
const key = Object.keys(obj)
for(let i=0; i<key.length; i++){
    console.log(obj[key[i]])
}