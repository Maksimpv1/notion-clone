import { auth } from '@clerk/nextjs/server'
import { RoomProvider } from '@liveblocks/react'
import React from 'react'

function DocLayout({children,params} : {children: React.ReactNode, params: {id:string}}) {
    auth.protect()
  return (
    <RoomProvider>DocLayout</RoomProvider>
  )
}

export default DocLayout