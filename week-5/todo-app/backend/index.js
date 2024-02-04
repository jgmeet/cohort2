const express = require('express')
const app = expres()

app.use(express.json())
// zod
// const importedSchema = require('./schema')
// *** or we can destructure the objects like below 
const {createTodo} = require('./schema')
const {updateTodo} = require('./schema')

// db
const {ToDo} = require('./db')

app.get("/todos", async (req,res)=>{
    // getting the stuff in mongoDb
    const todos = await ToDo.find()
    res.json({todos})
})

app.post("/todo", async (req,res)=>{
    const todo = req.body.todo
    const isValid = createTodo.safeParse(todo)

    if(!isValid.success) {
        return res.status(411).send("Input invalid!")
    }

    // put in mongoDB
    const newTodo = new ToDo(
        {
            title: todo.title,
            description: todo.description
        }
    )
    await newTodo.save()
    return res.status(200).send("Todo added successfully")

}) 

app.put("/completed", (req,res)=>{
    const todoId = req.body.id
    const isValid = updateTodo.safeParse(todoId)

    if(!isValid.success) {
        return res.status(411).send("Input invalid!")
    }

    //  update in mongoDB
    
})

app.listen(3000)