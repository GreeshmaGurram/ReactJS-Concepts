import React from 'react'

type StatusProps = {
    status: 'loading' | 'success' | 'error'
}
// prop should be only any of these vals

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading'){
        message = "Loading..."
    }
    else if (props.status === 'success'){
        message = "Data fetched successfully!"
    }
    else if (props.status === 'error'){
        message = "Error fetching data"
    }
  return (
    <div>
        {message}
    </div>
  )
}
