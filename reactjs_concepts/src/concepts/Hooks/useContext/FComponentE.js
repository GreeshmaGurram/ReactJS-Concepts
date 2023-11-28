import React, { useContext } from 'react'
import FComponentF from './FComponentF'
import { ChannelContext, UserContext } from '../../../App'

function FComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
        {user} - {channel}
        <FComponentF/>
    </div>
  )
}

export default FComponentE