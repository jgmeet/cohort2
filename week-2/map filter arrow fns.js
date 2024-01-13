// arrow functions
function sum(a,b) {
    return a+b
}

// another way to define fns, known as arrow functions
const sum1 = (a,b) => {
    return a+b
}

// mongoDB password: ZF305qFuVXwVqsyl
// mongodb+srv://jgmeet:ZF305qFuVXwVqsyl@cluster0.xkeqc5g.mongodb.net/
// neonDB: postgresql://jagmeet.techfest:myDutAv9Bf7j@ep-proud-mode-23588826.us-east-2.aws.neon.tech/test?sslmode=require
console.log(sum(2,3))
console.log(sum1(2,3))

// map
const transform = (val)=>{
    return val*2
}

const arr = [1,2,3,4]
// applying transform() function on every element of the arr
const newArr = arr.map(transform)
// or u can directly pass function as input
// const newArr = arr.map(function(val) {
//     return val*2
// })
console.log(newArr)

// filter
const filteringLogic = (val)=>{
    if(val%2 == 0) return val
    // else we will not return val
}

// or u can write as
const filteringLogic1 = (val)=>{
    if(val%2 == 0) return true
    // else we can return false or do nothing
}

const evenElems = arr.filter(filteringLogic1)
console.log(evenElems)