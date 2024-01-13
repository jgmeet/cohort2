/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNum
    if(numbers.length == 0) return largestNum
    largestNum = -1000000
    numbers.forEach((num) => {
        if(num > largestNum) {
            largestNum = num
        }
    })
    return largestNum
}

module.exports = findLargestElement;