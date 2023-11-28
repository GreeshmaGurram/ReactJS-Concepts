import React from 'react'

function Button({handleClick, children}) {
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

// 1 method to reduce all comps' re render
// but functions change so considerd as change therefore re render unnecessary ones
export default React.memo(Button) 