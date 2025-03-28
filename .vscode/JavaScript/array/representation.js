const arr = [3,5,6,3,2,"rohit","hello",true]
console.log(typeof arr)
console.log(arr[5])
// advamtage of at-> negative index bhi le leta h, latest h,
console.log(arr.at(0))
console.log(arr.length)

const newarr = structuredClone(arr)
console.log(newarr==arr)