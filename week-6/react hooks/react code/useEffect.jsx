import React from "react"
import { useEffect } from "react"
import { useState } from "react"

function App() {
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        setInterval(function() {
            fetch("https://sum-server.100xdevs.com/todos").then( // it's the backend server to get the todos list
                async function(res) {
                    const json = await res.json()
                    setTodos(json.todos);
                }
            )}
        , 3000) // get's new list of todos after every 3 seconds
    }, [])
        


    return (
        <>
        {todos.map((todo)=>{
            return <ToDo title={todo.title} description={todo.description} />
        })}
        </>
    )

}


function ToDo({title, description}) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App
