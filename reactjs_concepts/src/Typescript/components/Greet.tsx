import React from 'react'

type GreetProps = {
    name: string
    msgCount: number
    isLoggedIn : boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        {
            props.isLoggedIn ? (<h2>Welcome {props.name} You have {props.msgCount} unread msgs</h2>) : (<h2>Welome Guest!</h2>)
        }
        
    </div>
  )
}
