
import React, { useEffect } from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const[sum, setSum] = useState(0)
  const[curr, setCurr] = useState(0)

  useEffect(() => {
    setSum(sum + Number(curr))
  }, [curr])

  return (
    <div>
        <h1>Sum Calculator</h1>
        <input type="number" onChange={(e) => {
          setCurr(e.target.value)
        }} />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
