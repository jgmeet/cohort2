import { createContext, useContext } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"

import {countAtom} from "./store/atoms/count"

function App() {
    return (
        <div>
            <RecoilRoot>
                <Count/>
            </RecoilRoot>
        </div>
    )
}

function Count() {
    console.log("Count rendered")
    return (
        <div>
            <Button />
            <CountRenderer />
        </div>
    )
}

function CountRenderer() {
    console.log("CountRenderer rendered")
    const count = useRecoilValue(countAtom)

    return (
        <div> 
            <div>Rendered count is {count}</div>
            <EvenCountRenderer value={count}></EvenCountRenderer>
        </div>
    )
}

function EvenCountRenderer() {
    const count = useRecoilValue(countAtom)
    if(count%2 == 0) {
        return (
            "This is even counter"
        )
    }
}

function Button() {
    console.log("Button rendered")
    // const [count, setCount] = useRecoilState(countAtom)
    const setCount = useSetRecoilState(countAtom)
    // this decreases un-necessary renders due to count change

// setCount(count+1) --> requires count to be present
// setCount(c => c+1) --> don't requires count to be present
// setCount(function (c) { 
//     return c+1   -->don't requir es count to be present
// })

    return (
        <div>
        <button onClick={()=>{
            setCount(count=>count+1)
        }}> Increase count</button>

        <button onClick={()=>{ 
            setCount(count=>count-1)
        }}> Decrease Count</button>
        </div>
    )
}

export default App