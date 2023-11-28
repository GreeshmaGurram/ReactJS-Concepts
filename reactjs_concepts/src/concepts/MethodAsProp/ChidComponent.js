import React from 'react'

function ChidComponent({greetParent}) {

    const clickHandler = () => {
        greetParent("from child")
    }

  return (
    <div>
        <button onClick={clickHandler}>Greet parent</button>
    </div>
  )
}

export default ChidComponent