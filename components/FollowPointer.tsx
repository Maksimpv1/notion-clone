import React from 'react'

function FollowPointer({
    x,y,info
}: {
    x: number,
    y: number,
    info: {
        name: string,
        email: string,
        avatar: string,
    }
}) {
  return (
    <div>FollowPointer</div>
  )
}

export default FollowPointer