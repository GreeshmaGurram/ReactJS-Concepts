import React from 'react'

function NameList() {
    const names = ["G", "V", "R"]
  return (
    <div>
        {
            names.map((name, index) => {
                return (<h2 key={index}>{index} {name}</h2>)
            })
        }
        </div>
  )
}

export default NameList
//key is not prop ... used to handle ui updates well