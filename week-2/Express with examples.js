// array of objects
var users = [
    // user 1
    {
    name: "xyz",
    kidneys: ["healthy", "unhealthy"]
    },
    // user 2
    {
    name: "abcd",
    kidneys: ["unhealthy", "healthy"]
    }
]

const express = require("express")
const app = express()
app.use(express.json());
app.listen(3000)

app.get("/", function(req, res) {
    // get total num of kidneys, healthy and unhealthy
    const xyzKidneys = users[0].kidneys
    const numOfKidneys = xyzKidneys.length
    console.log(xyzKidneys)
    let healthyKidneys = 0
    for(let i=0; i<numOfKidneys; i++) {
        if(xyzKidneys[i] == "healthy") {
            healthyKidneys++
        }
    }
    let unhealthyKidneys = numOfKidneys-healthyKidneys
    // res.send(xyzKidneys)
    res.json({numOfKidneys,
         healthyKidneys,
         unhealthyKidneys})
})

app.post("/", function(req, res) {
    // adds kidney
    const userId = req.body.user
    const isHealthy = req.body.health
    if(isHealthy) {
        users[userId].kidneys.push("healthy")
    } else {
        users[userId].kidneys.push("unhealthy")
    }

    res.json({msg: "Done!"})
})

app.put("/", function(req, res) {
    // replaces unhealthy kidney with the healthy kidney
    const userId = req.body.user
    // console.log("userId: "+userId)
    const userKidneys = users[userId].kidneys
    // console.log(userKidneys)
    let flag = true
    for(let i=0; i<userKidneys.length; i++) {
        if(userKidneys[i] == "unhealthy") {
            userKidneys[i] = "healthy"
            flag = false
            break
        }
    }

    if(flag) {
        res.json({msg: "there is no unhealthy kidney"})
    } else {
        res.json({msg: "health kidney placed"})
    }
})

app.delete("/", function(req, res) {

})