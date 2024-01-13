// zod is an input validation library
const express = require("express")
const app = express()
const zod = require("zod")
app.use(express.json())

const schema = zod.array(zod.number())

// {    object of:
//     email -> string with @,.,...etc
//     password -> string, min of 8 chars
//     array -> of numbers
// }

const schema1 = zod.object(
    zod.string().email(),
    zod.string().min(8),
    zod.array(zod.number())
)

app.get("/", (req,res)=>{
    const kidneys = req.body.kidneys
    const isInputValid = schema.safeParse(kidneys)

    res.send(isInputValid)
})

app.listen(31)
