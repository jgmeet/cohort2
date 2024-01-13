const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res)=>{
    // kidneys = [1,2]
    const kidneys = req.body.kidneys
    const kidneysLength = kidneys.length
    res.json({msg: "You have " + kidneysLength + " kidneys"})
})

// global catches -> middleware if exception is rised
// Error-handling middlewares
// we can have multiple Error-handling middlewares
app.use(function(err, req, res, next) {
    res.status(404).send("Something went wrong!")
})


app.listen(31)