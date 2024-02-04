import { createContext, useContext, useState } from "react"

const CountContext = createContext()
const CntContext = createContext()

function App() {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <CountContext.Provider value={setCount}>
                <CntContext.Provider value={count}>
                    <Count/>
                </CntContext.Provider>
            </CountContext.Provider>
            
        </div>
    )
}

function Count() {
    const count = useContext(CntContext)
    return (
        <div>
            <div>Counter {count}</div>
            <Button count={count}/>
            <CountRenderer count={count} />
        </div>
    )
}

function CountRenderer({count}) {
    return (
        <div> Rendered count is {count}</div>
    )
}

function Button({count}) {
    const setCount = useContext(CountContext)
    return (
        <div>
        <button onClick={()=>{
            setCount(count+1)
        }}> Increase count</button>

        <button onClick={()=>{ 
            setCount(count-1)
        }}> Decrease Count</button>
        </div>
    )
}

export default App