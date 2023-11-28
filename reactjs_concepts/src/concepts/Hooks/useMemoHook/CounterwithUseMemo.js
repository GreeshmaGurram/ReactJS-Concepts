import React, { useMemo, useState } from 'react'

function CounterwithUseMemo() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const increment1 = () => {
        setCounter1(counter1 + 1)
    }
    const increment2 = () => {
        setCounter2(counter2 + 1)
    }

    // useMemo calcs the cached val only when dependency has changed
    // invokes the func and caches result
    const isEven = useMemo( ()=> {
        let i = 0
        while(i<200000000) i++
        return counter1 % 2 === 0
    }, [counter1])
  return (
    <div>
        <button onClick={increment1}>Counter 1 {counter1}</button>
        <span>{isEven ? 'Even' : 'odd'}</span>
        <div>
        <button onClick={increment2}>Counter 2 {counter2}</button>
        </div>
    </div>
  )
}

export default CounterwithUseMemo