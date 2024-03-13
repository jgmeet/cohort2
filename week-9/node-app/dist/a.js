"use strict";
// returns first element of the array (array can be of any type)
function getFirstElement(arr) {
    return arr[0];
}
const firstElem = getFirstElement(['5,6', '1,2,3']); // return type is string only and can only pass array of strings
const firstElem1 = getFirstElement(['5,6', '1,2,3', 1, 2]); // return type can be either string or number
console.log(firstElem);
