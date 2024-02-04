import React from "react"
import { useCallback } from "react"
import { memo, useState } from "react"

function App() {
    const [counter, setCounter] = useState(0)

    const inputFuncton = useCallback(()=>{
        console.log("Child is clicked")
    }, [])

    return (
        <div>
        <Child inputFunction={inputFuncton} />
        <br />
        <button onClick={function (){
            setCounter(counter+1)
        }}>Counter {counter}</button>
        </div>
    )
}

const Child = memo(({inputFunction}) => {
    console.log("child button re-rendered")
    return <button onClick={inputFunction}>
        Child button
    </button>
})



export default App