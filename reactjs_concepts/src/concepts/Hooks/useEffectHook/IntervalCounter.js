import React, { useEffect, useState } from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)

    // dependency var should be the state whuch changes and which the useEffect Hook has to look for changes
    useEffect(() => {
        const interval = setInterval(incrementCounter, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [count])

    const incrementCounter = () => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
        <h2>{count}</h2>
    </div>
  )

}

export default IntervalCounter