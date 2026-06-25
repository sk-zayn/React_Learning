import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function countHandler(){
    setCount(count+1);
  };
  return (
    <div>
        <button onClick={countHandler}> Counter {count} </button>
    </div>
  )
}


export default App



