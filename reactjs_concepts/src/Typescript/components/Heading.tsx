import React from 'react'

type HeadingProps = {
    // says that children prop is optional
    children? : string
    // if children prop is a comp
    // children: React.ReactNode
}


export const Heading = (props: HeadingProps) => {
  return (
    <div>
        <h2>{props.children}</h2>
    </div>
  )
}
