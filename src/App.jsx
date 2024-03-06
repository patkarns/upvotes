import { useState } from 'react'
import './App.scss'
import Upvote from './components/upvote/Upvote'

function App() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className="card">
        <Upvote isSelected={isSelected} setIsSelected={setIsSelected}/>
      </div>
    </>
  )
}

export default App
