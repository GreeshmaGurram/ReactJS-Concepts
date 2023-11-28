import React, { useState } from 'react'
import useCounter from './useCounter'

function CustomeCounter() {
    const [count, handleIncrement5, handleDecrement, handleReset] = useCounter(10)
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={handleIncrement5}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CustomeCounter