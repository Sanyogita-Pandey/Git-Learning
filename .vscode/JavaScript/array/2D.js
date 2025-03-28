
let arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr[1])
console.log(arr[1][2])
// flat is used to convert 2D or 3D arrays in 1D array
let newarr = arr.flat()
console.log(newarr)
// for 3D array it had to be 2 but if we are confused we can eassily write infinity
let arr1 = [[1,2,3,[4,5]],[4,5,6,8],[9,0, 3,4]]
let arr2 = arr1.flat(Infinity)
console.log(arr2)
console.log(Array.isArray(arr1))