const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())

const jwtPassword = "123456" //  required to verify the signature or token

const allUsers = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// middleware to check for user provided correct id and password
function userExists(req, res, next) {  
  // checks if username exists in data with the password provided
  const username = req.body.username
  const password = req.body.password
  console.log(username, password)
  // let id = allUers.find((val)=>{
  //   if(val.username === username && val.password === password){
  //     return true
  //   }
  // })

  // if(elem == undefined) {
  //   return res.status(403).send("User doesnt exist in our in-memory db")
  // }

  let usernameFound = false
  for(let i=0; i<allUsers.length; i++) {
    if(allUsers[i].username == username) {
      usernameFound = true
      if(allUsers[i].password == password) {
        next()
        return
      }
    }
  }

  if(usernameFound) {
    return res.status(403).send("Invalid password!!")
  }
  return res.status(403).send("User doesn't exist in our in-memory db")
}

app.get("/users", (req,res)=>{
  const token = req.headers.authorization

  try {
    const decoded = jwt.verify(token, jwtPassword)
    const username = decoded.username
    // return a list of users other then this user
    const users = allUsers.filter((val)=>{
      if(val.username != username) {
        return true
      }
    })
    res.json({
      users: users
      })
  } catch(err) {
    return res.status(403).json({msg: "Invalid token"})
  }
  
})

app.post("/signin", userExists, (req,res)=>{
  // generate and return jwt with username encrypted
  const username = req.body.username
  
  // now generate jwt and return it to end-user
  const token = jwt.sign({username: username}, jwtPassword)
  return res.json({token})
})

app.listen(3000)