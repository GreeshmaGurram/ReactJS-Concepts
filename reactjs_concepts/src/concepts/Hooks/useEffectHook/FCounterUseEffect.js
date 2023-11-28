import React, { useEffect, useState } from 'react'

function FCounterUseEffect() {

    const [count, setCount] = useState(0)

    // takes callback and dependecies(run useEffect only whene dependency change) if [] => render only once when doc is rendered
    // [] ==> implements componnetDidMount()
    // [dependency] ===> implements componentDidUpdate()
    useEffect(() => {
        document.title = `${count} times`
    }, [count])

    const incrementCounter = () => {
        setCount(prevCount => prevCount + 1)
    }
  return (
    <div>
        <button onClick={incrementCounter}>Clicked {count} times</button>
    </div>
  )
}

export default FCounterUseEffect