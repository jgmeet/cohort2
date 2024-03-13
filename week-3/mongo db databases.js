const express = require("express")
const mongoose = require("mongoose")
// library to access the data form the database

const app = express()
app.use(express.json())

// mongoose.connect("mongodb+srv://jgmeet:ZF305qFuVXwVqsyl@cluster0.xkeqc5g.mongodb.net/")
mongoose.connect("mongodb://localhost:27017/")
// creates an database with name 'test' and then stores data in 'users' table
const User = mongoose.model('users', {
  name: String,
  username: String,
  password: String
})

app.post("/signup", async (req,res)=>{
  const name = req.body.name
  const username = req.body.username
  const password = req.body.password

  console.log(name, username, password)

  let exisistingUser = await User.findOne({username: username})
  if(exisistingUser){
    return res.status(400).send("Username already exists")
  }
  
  const user = new User({
    name: name,
    username: username,
    password: password
  })
  
  user.save()
  return res.status(200).send("User created successfully")
})

app.listen(3000)