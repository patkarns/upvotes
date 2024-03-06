import { useState } from 'react'
import './App.scss'
import Upvote from './components/upvote/Upvote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Upvote/>
      </div>
    </>
  )
}

export default App
