import { RecoilRoot, useRecoilValue } from "recoil"
import { finalCount, topBar } from "./atoms"

function App() {
  return (
    // <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    // </div>
  )
}

function MainApp() {
  const top = useRecoilValue(topBar)
  // console.log(topBar)

  // const totalNotificationCount = useRecoilValue(finalCount)

  return (
  <div>
    <button>Home</button>
    <button>My netwrok ({top.network>=100 ? "99+" : top.network})</button>
    <button>Jobs ({top.jobs})</button>
    <button>Messaging ({top.messaging})</button>
    <button>Notifications ({top.notifications})</button>
    {/* <button>Me ({totalNotificationCount})</button> */}
  </div>
  )
}

export default App
