import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
        //  useEffect hook returns func that executes cleanup code
        return () => { window.removeEventListener('mousemove', logMousePosition) }
    }, [])

    //in class comp to add cleanup code
    // componentWillUnmount(){ window.removeEventListener('mousemove', logMousePosition)}
  return (
    <div>{x} {y}</div>
  )
}

export default HookMouse