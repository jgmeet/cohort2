import React from "react"
import { useMemo } from "react";
import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0)
    const [num, setNum] = useState(1)

    let sum = useMemo(()=> {
        let sum = 0;
        console.log("inside getSum() function")
        for(let i=1; i<=num; i++) {
            sum += i;
        }
        return sum
    }, [num]) // computes only if num changes
    

    function updateCounter(counter) {
        setCounter(++counter)
    }

    return (
        <div>
        <input onChange={async function (e) {
            setNum(e.target.value)
            // await debounce()
        }} placeholder="Enter number" />
        <br />
        <div>Sum is {sum}</div>
        <button onClick={()=>updateCounter(counter)}>Counter {counter}</button>
        </div>
    )
}

export default App