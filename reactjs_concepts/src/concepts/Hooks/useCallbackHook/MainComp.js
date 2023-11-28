import React, { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

function MainComp() {
    const [age, setAge] = useState(1)
    const [salary, setSalary] = useState(50000)

    // useCallback here returns a new function only when dependency changes
    // else returns the old cached function so as there is no change between prev and pres func, its not re rendered
    // caches the reference of func itself and not result
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])

  return (
    <div>
        <Title/>
        <Count text="age" count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default MainComp