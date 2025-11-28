import React from 'react'

function Picture() {
    const pic = [
        {
            id : 1,
            src:'/pho/1.jfif'
        },
         {
            id : 2,
            src:'/pho/2.jfif'
        },
         {
            id : 3,
            src:'/pho/3.jfif'
        },
         {
            id : 4,
            src:'/pho/4.jfif'
        },
    ]
  return (
    <div className='flex gap-2 max-md:grid-cols-2'>
        {pic.map((i)=>(
            <ul key={i.id} >
            <img src={i.src}  className=' mx-5 p-4 rounded-full w-100 h-100 max-md:h-50 max-md:w-50  ' />
            </ul>

        ))}
    </div>
  )
}

export default Picture