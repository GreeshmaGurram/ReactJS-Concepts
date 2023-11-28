import React, { useState } from 'react'

function FCounterWithPrevState() {
    let initialCount = 0
    const [count, setCount] = useState(initialCount)

    const handleIncrement5 = () => {
        //wrong coz depends on prev state
        // for(let i = 0; i<5 ; i++){
        //     setCount(count + 1)
        // }
        // correct way when state depends on prev state use callback function
        setCount(prevCount => prevCount + 5)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const handleReset = () => {
        setCount(initialCount)
    }
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={handleIncrement5}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default FCounterWithPrevState