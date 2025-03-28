const set1 = new Set([10,20,30,45,75,34,654,8,20,45])
console.log(set1)
// unique values only

// add
set1.add(9)
set1.add("ROHIT")
set1.add(30)
// delete
set1.delete(10)
console.log(set1)
console.log(set1.size)
// has 
const user_id=new Set(["rogit_negi9","innocent_girl1036","chaavi_90","sumit_90"])
let new_user="rogit_negi9"
console.log(user_id.has(new_user))

// clear
set1.clear()
console.log(set1)

// array to set
let arr=[10,20,30,10,40,20,50,40]
const set2 = new Set(arr)
console.log(set2)

// union of sets
let set3 = new Set([10,20,30,20,50,10])
let set4 = new Set([50,60,70,80,30,21])
let set5 = new Set([...set3,...set4])
console.log(set5)

// intersection
// filter hmesha array pr hi lgta h isliye pehle set ko array me change kiya [...set3]
const result = new Set([...set3].filter((num)=>set4.has(num)))
console.log(result)
// iterate on set
for(let value of set3)
    console.log(value)

set4.forEach((value)=>console.log(value))
