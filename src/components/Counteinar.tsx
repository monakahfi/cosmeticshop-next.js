import React from 'react'

interface IContainerProps{
    children : React.ReactNode
}

function Countainer({children}:IContainerProps) {
  return (
    <div
    className=' container mx-auto bg-rose-200'
    >
      
      {children}</div>
  )
}

export default Countainer