import React from 'react'
import { UserContext, ChannelContext } from '../../../App'

function FComponentF() {
  return (
    <div>
      {/* method 1  */}
      {/* <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return (<div>User context value {user} and {channel} </div>)
                  }
                }
              </ChannelContext.Consumer>
            )
          }
        }
      </UserContext.Consumer> */}

      
    </div>
  )
}

export default FComponentF