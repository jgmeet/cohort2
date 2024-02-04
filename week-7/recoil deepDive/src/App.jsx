import { RecoilRoot, useRecoilValue, useRecoilValueLoadable } from "recoil"
import { todoAtoms } from "./atoms faily"

function App() {
    return (
        <div>
            <RecoilRoot>
                <Todo id={1} />
                <Todo id={2} />
            </RecoilRoot>
        </div>
    )
}

function Todo({id}) {
    const todo = useRecoilValueLoadable(todoAtoms(id))

    if(todo.state == "loading") {
        return <div>
        loading... <br />
        </div>
    }
    else if(todo.state == "hasError") {
        return <div>
        Error while loading data! <br />
        </div> 
    } else {
        return (
            <div>
                {todo.contents.title} <br />
                {todo.contents.description}
                <br></br>
            </div>
        )
    }
}

export default App