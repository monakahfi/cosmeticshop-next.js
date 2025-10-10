import React from 'react'

function CartItem() {
  return (
   <div className=' grid grid-cols-12 bg-rose-300 mb-4'>
             <div className=' col-span-10  text-right p-4'>
               <h3 className='text-3xl font-extrabold'>اسم محصول</h3>
               <p className='text-xl font-semibold'><span>3</span>:تعداد محصول</p>
               <p className='text-xl font-semibold'><span>45$</span>:قیمت محصول </p>
                 <div className='flex flex-row gap-6 mt-5'>
            
              <button className='h-12 w-12 bg-rose-400 shadow-2xl rounded-3xl items-end'>+</button>
                <p className='my-4'>3</p>
                <button className='h-12 w-12 bg-rose-400 shadow-2xl  rounded-3xl items-end'>-</button>
              </div>
             </div>
            <img  src="/pic/1.jfif" className=' col-span-2 '/>
         </div>
        
  )
}

export default CartItem