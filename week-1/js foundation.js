let myName = "jagmeet"
let age = 17;
console.log("my name is " + myName + " and I am " + age + " year old.")
console.log(age + " year old")

if(age >= 18) {
    console.log("Can drive")
} else {
    console.log("Can't drive")
}

// sum of 1 to 100
let sum = 0;
for(let digit=1; digit<=100; digit++) {
    sum += digit;
}
console.log(sum)

ages = [1,2,3,4,5,6,7,]
for(let i=0; i<ages.length; i++) {
    if(ages[i]%2 == 0) console.log(ages[i])
}

obj = {
    myname: "jagmeet",
    age: 19
}
console.log(obj["myname"] + " " + obj["age"])

objArray = [
    {
        myname: "jagmeet",
        age: 19
    },
    {
        myname: "aditya",
        age: 18
    },
    {
        myname: "bill",
        age: 39
    }
]

for(let i=0; i<objArray.length; i++) {
    if(objArray[i]["age"] <= 20) {
        console.log(objArray[i]["myname"] + " " + " is under 20")
    }
}

function findSum(a, b) {
    return a+b
}
function displaySum(sum) {
    console.log("sum is " + sum)
}

displaySum(findSum(3,4))



function square(a) {
    return a*a
}
function cube(a) {
    return a*a*a
}
function fourth(a) {
    return a*a*a*a
}

function printSum(a, b, fn) {
    console.log(fn(a)+fn(b))
}

// print sum of squares
printSum(2,3,square)
// print sum of cubes
printSum(2,3,cube)

// *** the same way to do that with callback functions is below

function getPower(a,power) {
    let val = 1;
    for(let i=1; i<=power; i++) {
        val = val*a
    }
    return val
}

function printSumNew(a, b, power, fn) {
    let val = fn(a,power)+fn(b,power)
    console.log("sum of "+a+", "+b + " to the power " + power+ " is " + val)
}

// print sum of squares
printSumNew(2,3,2,getPower)
// print sum of cubes
printSumNew(2,3,3,getPower)


// ** Anonymous functions -> functions with no name
// used when passing fn as an argument to a func and instead
// of writing it's name, we write it's code

printSumNew(2,3,4, function (a,power) {
    let val = 1;
    for(let i=1; i<=power; i++) {
        val = val*a
    }
    return val
})
