function names(fun){
    console.log("Hello I am name")
    fun()
}
function greet(){
    console.log("I am a call back function")
}
names(greet)

// function fetchData(){
//     console.log("I am fetching data")
// }
// ...... setInterval(fetchData, 5000)

let arr=[10,20,30,41,51,60]
arr.forEach(num=>console.log(num))
// for each didnt retur any value
const result = arr.filter((num)=> num%2==0)
console.log(result)

// in map we can modify the result but in filter we can only change our result
const arr2=[2,4,6,7]
const resul = arr2.map((number)=>{
    return number*number
})
console.log(resul)