const arr = [3,2,5,73,5,7,3,2]
arr.push(30)
arr.push(90)
console.log(arr)

arr.pop()
console.log(arr)
// unshift, add element at the start
arr.unshift(5)
console.log(arr)

// shift delet element from the start
arr.shift()
console.log(arr)

// delete operation, deletes the element but contains its space(creates a hole)
delete arr[0]
console.log(arr)
// indexes
console.log(arr.indexOf(2))
console.log(arr.includes(10))

console.log(arr.slice(3,7))
// in splice(starting index, number of values you want) and delete that portion from original array
console.log(arr.splice(3,7))
// with the help of splice we can add some values also
arr.splice(3,0,"rohit","mohit","Sachin")
console.log(arr)
// join converts the array into string and add the element whatever you write will be after every element
console.log(arr.join("*"))

let arr1=[2,4,6,7,3,6,8]
let arr2 = [64,7,3,8,9,3,6]
let arr3 = arr1.concat(arr2,arr)
console.log(arr3)