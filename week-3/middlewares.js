const express = require("express")
const app = express()

let cnt = 0
function calculateRequest(req, res, next) { // a midleware
    cnt++
    console.log("function called " + cnt + " times")
    next()
}

function authenticateMidleware(req, res, next) {
    const id = req.body.id
    const user = req.body.user
    const password = req.body.pass
  
    // console.log(id,user,password)

    if(user != "jgmeet" || password != "pass") {
        res.json({ms: "Invalid username or password!"})
    }
    else if(id != 1 && id != 2) {
        res.json({ms: "kidney id invalid!"})
    }
    else {
        // authentication done!
        next()
    }
}

app.use(express.json())
// app.use(calculateRequest()) -> to call this function in
// every request we will make

// app.get("/health", (req, res)=>{
//     const id = req.body.id
//     const user = req.body.user
//     const password = req.body.pass
  
//     console.log(id,user,password)

//     if(user != "jgmeet" || password != "pass") {
//         res.json({ms: "Invalid username or password!"})
//     }
//     else if(id != 1 && id != 2) {
//         res.json({ms: "kidney id invalid!"})
//     }
//     else {
//         // authentication done!
//         res.json({ms: "You are good to go!"})
//     }
// })

// using midleware
app.get("/", calculateRequest, authenticateMidleware, (req, res)=>{
    // our logic
    res.json({msg: "Inside get fn"})

})

app.post("/", calculateRequest, authenticateMidleware, (req, res)=>{
    // our logic
    res.json({msg: "Inside post fn"})
})

app.listen(3000)