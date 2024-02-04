import React from 'react'

let counter = 4;
function App() {
    const [todo, setTodo] = React.useState([
        {   
            id: 1,
            title: "todo 2",
            description: "todworop2ri234 111"
        },
        {   
            id: 2,
            title: "todo 2",
            description: "todworop2ri234 222"
        },
        {   
            id: 3,
            title: "todo 3",
            description: "todworop2ri234 3333"
        },

    ])

    function AddToDo() {
        setTodo([...todo, {
            id: counter++,
            title: "new todo",
            description: "new todo description"
        }])
    }

    return (
        <div>
            <button onClick={AddToDo}>Add todo</button>
            {
                todo.map(function(task) {
                    return <Todo key={task.id} title={task.title} description={task.description} />
                })
            }
        </div>
    )
}

function Todo({title, description}) {
    return <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
}

export default App