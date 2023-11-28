import React, { useState } from 'react'

function FCounterWithArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([...items, {id: items.length, name: Math.random()*100}])
    }
  return (
    <div>
        <button onClick={addItem}>Add a number</button>
        <ul>
            {
                items.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </div>
  )
}

export default FCounterWithArray