import CartItem from '@/components/CartItem'
import Countainer from '@/components/Counteinar'
import React from 'react'

function Cart() {
  return (
    <Countainer>
        <h1>سبد خرید</h1>
        <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit pb-6 m-2 shadow-2xl rounded-xl '/>
      </div>
        <div>
            
         <CartItem/>
         <CartItem/>
         <CartItem/>
         <CartItem/>
         
        </div>
        <div className='bg-purple-400 border-2 rounded-4xl shadow-2xl p-4 text-right font-semibold text-xl'>

            <h3><span>1000$</span>قیمت بدون تخفیف:</h3>
            <h3><span>100$</span>سود شما از این خرید:</h3>
            <h3><span>40$</span>قیمت پست:</h3>
            <h3><span>9000$</span>قیمت کل:</h3>
             <div className='flex flex-col py-4'>
               <div className='flex flex-row text-right '>

            <input type='text' placeholder='درج کد تخفیف'/>
            <button>اعمال کد تخفیف</button>
               </div>
            <button>پرداخت</button>
             </div>
        </div>
    </Countainer>
  )
}

export default Cart