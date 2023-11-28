import React, { useState } from 'react'

function FCounter() {
    // array destructuring
    const [count, setCount] = useState(0);

    const incrementCounter = () =>{
        setCount(prevCount => prevCount + 1)
    }
  return (
    <div>
        <button onClick={incrementCounter}>Clicked {count} times</button>
    </div>
  )
}

export default FCounter