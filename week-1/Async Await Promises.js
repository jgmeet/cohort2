// // asynchronius functions -> setTimeout, fs.readFile, Fetch(will discuss later about fetch) 

// function fn() {
//     for(let i=0; i<5; i++) {

//     }
//     console.log("Function completed running now!")
// }
// setTimeout(fn, 1000) // it will wait for 2s to execute fn, till then
// // it will proced with the code written below

// console.log("hi there")
// fn()
// console.log("Hello world!!")

// // *** run the line no 3 to 14 on http://latentflip.com/loupe
// // JS browser architecture -> Call Stack, web Apis, event Loop, CallbackQueue

// const fs = require("fs")
// const { fileURLToPath } = require("url")
// // fs-> filesystem, which reads and writes files

// fs.readFile("file.txt", "utf-8", function(err, data) {
//     console.log(data)
// })

// console.log("Hello world")


// Promises

//my own asynchronous function using promise
const fs = require("fs")

// function readMyFile() {
//     console.log("inside readMyFile")
//     var p = new Promise(function(resolve) {
//         console.log("inside promise")
//         fs.readFile("file.txt", "utf-8", function(err, data) {
//                 console.log("before resolving data")
//                 resolve(data)
//             }
//         )
//     })
//     return p;
// }

// function printData(data) {
//     console.log(data)
//     console.log("inside printData function")
// }

// console.log("before calling readMyFile function")
// readMyFile().then(printData)
// console.log("after calling readMyFile function")


// Async await
// function printMessage() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve("This is my message....")
//         }, 2000)
//     })
// }
function printMessage1() {
    console.log("before promise")
    let ans = new Promise(function(resolve) {
        setTimeout(function() {
            resolve("This is my message1....")
        }, 3000)
    })
    console.log("after promise")
}

// function main() {
//     console.log("Before printMessage() called")
//     printMessage().then(function(value) {
//         console.log(value)
//     })
//     console.log("After printMessage() called")
// }

// main()

async function main1() {
    console.log("Before await printMessage() called")
    let val = await printMessage1()
    console.log(val)
    console.log("After await printMessage() called")
}

main1()
// console.log("After main1() called")

