const arr=[1,2,3,5,6]
// arr.reduce(callback function , initialization)
// accumulator and current value
const result = arr.reduce((acc,curr)=>{
    acc = acc+curr
    return acc
} , 0)
console.log(result)


let arr2=["Apple","BANANA","Apple","Grapes","BANANA","Apple","Grapes","Grapes","BANANA"]
const resul=arr2.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++
    else
        acc[curr]=1
    
    return acc
},{})
console.log(resul)