import Countainer from '@/components/Counteinar'
import React from 'react'

function page() {
  return (
    <Countainer>
          <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit pb-6 m-2 shadow-2xl rounded-xl '/>
      </div>
        <div className=' grid grid-cols-12 shadow-2xl mt-8 gap-4'>
         
            <div className=' col-span-9 rtl text-right p-5'>
                
                <h1 className='font-bold text-xl mb-4 '>محصول</h1>
                <p className=' font-mono text-gray-700 text-xl mb-12'>این محصول به زیباتر شدن شما کمک میکند تا شما درخشان تر باشید </p>
              
              <div className='flex flex-row-reverse gap-6 mt-5'>
            
              <button className='h-12 w-12 bg-rose-400 shadow-2xl rounded-3xl items-end'>+</button>
                <p className='my-4'>3</p>
                <button className='h-12 w-12 bg-rose-400 shadow-2xl  rounded-3xl items-end'>-</button>
              </div>
            </div>
            <div className=' col-span-3 shadow-2xl bg-purple-400 '>
                <img src="/pic/4.jfif"/>
            </div>

        </div>
    </Countainer>
  )
}

export default page