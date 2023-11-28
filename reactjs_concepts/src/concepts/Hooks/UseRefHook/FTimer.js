import React, { useEffect, useRef, useState } from 'react'

function FTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(

    )

    useEffect(() => {
        intervalRef.current = setInterval(() => {setTimer(prevState => prevState + 1)}, 1000)

        return () => { clearInterval(intervalRef.current) }
    }, [])

  return (
    <div>
        <h1>{timer}</h1>
        {/* interval is not defined coz scope is limited to useEffect so using useRef */}
        {/* <button onClick={() => clearInterval(interval)}>Clear interval</button> */}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear interval</button>

    </div>
  )
}

export default FTimer