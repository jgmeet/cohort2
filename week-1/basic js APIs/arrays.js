const arr = [4,5,6]

// push(val) -> adds val at back
arr.push(8)
console.log(arr)

// pop() -> removes last elem from array
arr.pop()
console.log(arr)

// unshift(val) -> adds val to the front of the array
arr.unshift(2)
console.log(arr)

// shift() -> removes first elem
arr.shift()
console.log(arr)

// arr1.concat(arr2) -> arr1 = arr1+arr2
let arr2 = [0,1,0,1]
console.log(arr2.concat(arr))
console.log(arr2)
// concat is done inplace, to store the results explicitely, store in it array
// console.log(arr2)
// arr2 = arr2.concat(arr)
// console.log(arr2)

// ****** forEach(fn) -> performs this function on ech element of the array

let arr3 = [0,1,2,3,4]
function fn(abc) {
    abc += 3
    console.log(abc)
}
function fn2(num) {
    num *= -1
    console.log(num)
}

arr3.forEach(fn) // adding 3 to each element and then printing
console.log(arr3) 
arr3.forEach(fn2) // multiplying -1 to each element and then printing

