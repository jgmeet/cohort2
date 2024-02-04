
import {useState} from "react"

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Do competetive programming",
      description: "Hello G",
      done: false
    },
    {
      title: "Do competetive programming and become candidate master",
      description: "Hello G, how are you",
      done: false
    }
  ])

  return (
    <div>
      <AddToDo setTodos={setTodos} todos={todos} />
      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div> 
  )
}

function AddToDo(props) {
  // console.log("re rendering the componets")
  function addTodo() {
    props.setTodos([...props.todos, 
    {
      title: "a new todo",
      description: 'a new todo'
    }])
  }

  return <button onClick={addTodo}>
    Add to do
  </button>
}

function Todo(props) {
  
  return <div>
      <h1> {props.title}</h1>
      <h2> {props.description}</h2>
      {/* currently leaving the done thing */}
    </div>
}

// *** below is the code for creating counter button

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <CustomButton counter={count} setCounter={setCount}></CustomButton>
//     </div>
//   )
// }

// function CustomButton(props) {

//   function buttonPressed() {
//     props.setCounter(props.counter+1)
//   }

//   return <button onClick={buttonPressed}>
//     Counter {props.counter}
//   </button>
// }

export default App
