import React, { useState } from 'react'
import BroadcastModal1 from './BroadcastModal1'
import BroadcastModal2 from './BroadcastModal2'

const BroadcastModal = ({setBroadcastModal, data}) => {
  const [broadcastModal2, setBroadcastModal2] = useState(false)

  return (
    <div className='absolute top-32 flex items-center justify-center w-[85%] lg:w-[65%] pb-5'>
          {
            broadcastModal2
            ?<BroadcastModal2 setBroadcastModal2={setBroadcastModal2} setBroadcastModal={setBroadcastModal} data={data} />
            :<BroadcastModal1 setBroadcastModal={setBroadcastModal} setBroadcastModal2={setBroadcastModal2} data={data} />
          }
    </div>
  )
}

export default BroadcastModal
