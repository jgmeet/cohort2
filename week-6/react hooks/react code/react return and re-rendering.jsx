import React, {useState} from "react"

function App() {
  const [title, setTitle] = useState("This is header 1")

  function updateTitle() {
    setTitle("This is header " + Math.random())
  }

  return (
    
    // we can create empty divs to get rid of <div>
    // or <React.Fragment>
    <div>
    <button onClick={updateTitle}>Click me to change the title</button>
    <Header title={title} />
    <Header title={"This is header 2"} />
    <Header title={"This is header 3"} />
    <Header title={"This is header 4"} />
    </div> 
    // or </React.Fragment>
  )
}

const Header = React.memo(function (props) {
  return <div>
    {props.title}
  </div>
})
// function Header({title}) {
//   return <div>
//     {title}
//   </div>
// }

export default App
