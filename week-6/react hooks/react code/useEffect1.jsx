import React from "react"
import { useEffect, useState} from "react"
import axios from "axios"

function App() {
    const [id, setId] = useState(1)

    function updateId(newId) {
        setId(newId)
    }

    return (
        <>
        <button onClick={()=>updateId(1)}>1</button>
        <button onClick={()=>updateId(2)}>2</button>
        <button onClick={()=>updateId(3)}>3</button>
        <button onClick={()=>updateId(4)}>4</button>
        <ToDo id={id} />
        </>
    )
}

function ToDo({id}) {
    const [todo, setTodos] = useState({})

    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((response) => {
            setTodos(response.data.todo)
        })
    }, [id]) // *** if we will not pass id here, the website will not render even after changing the id(state) from the App() function

    return (
        <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
        </div>
    )
}

export default App