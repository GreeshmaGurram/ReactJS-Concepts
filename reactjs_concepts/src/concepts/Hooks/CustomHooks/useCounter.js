import {useState} from 'react'

function useCounter(initialCount = 0) { 
    const [count, setCount] = useState(initialCount)

    const handleIncrement5 = () => {
        setCount(prevCount => prevCount + 5)
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    const handleReset = () => {
        setCount(initialCount)
    }

    return [count, handleIncrement5, handleDecrement, handleReset]
}

export default useCounter