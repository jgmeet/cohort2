import { useState } from 'react'
import { AmountCard} from './components/amountCard'
import { PayoutCard } from './components/payoutCard'

function App() {
  const [count, setCount] = useState(0)

  return (<div className='grid grid-cols-2'>
      <PayoutCard />
      <AmountCard />
    </div>
  )
}

export default App
