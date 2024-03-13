import React, {Suspense} from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

const Dashboard = React.lazy(()=> import("./components/Dashboard"))
const Landing = React.lazy(()=> import("./components/Landing"))


function App() {
  return (
    <>
     <BrowserRouter>
        <AppBar></AppBar>
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/' element={<Landing />}></Route>
          </Routes>
        </Suspense>
     </BrowserRouter>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate()
  return(
    <div>
      <div style={{background: "pink"}}>
        <button onClick={()=>{
          navigate("/")
        }}>Home</button>

        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dahsboard</button>
      </div>
    </div>
  )
}

export default App
