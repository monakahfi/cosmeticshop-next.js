"use client"
import CartItem from '@/components/CartItem'
import Countainer from '@/components/Counteinar'
import { IProductProps } from '@/components/ProductsItem'
import { useShopingCartContext } from '@/context/ShopingCartContext'
import { FormatNumber } from '@/utilis/number'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Cart() {
    const { cartItems}= useShopingCartContext();
      const [cartId,setCartId]=useState<IProductProps[]>([])

  useEffect(()=>{
    axios(`http://localhost:8000/products`).then((result)=>{
       const {data}=result;
       setCartId(data);
    })
  },[])

  return (
    <Countainer>
        <h1 className='rtl text-2xl font-bold text-right'>سبد خرید</h1>
        <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit pb-6 m-2 shadow-2xl rounded-xl '/>
      </div>
        <div>
            {
              cartItems.map((item)=>(
                   <CartItem key={item.id} {...item}/>
              ))
            }
         
       
         
        </div>
        <div className='bg-purple-400  border-2 border-purple-500 rounded-4xl shadow-2xl p-4 text-right font-semibold text-xl '>

            <h3 className='rtl'>قیمت بدون تخفیف:<span>{FormatNumber(
              cartItems.reduce((total,item)=>{
                let selectedProduct = cartId.find((product)=> product.id == item.id)
                return total + (selectedProduct?.price || 0  )  * item.qty
              },0))
              
              
              }</span></h3>
            <h3 className='rtl'>سود شما از این خرید:<span>100$</span></h3>
            <h3 className='rtl'>قیمت پست:<span>40$</span></h3>
            <h3 className='rtl'>قیمت کل:<span>9000$</span></h3>
             <div className='flex flex-col py-4'>
               <div className='flex flex-row text-right  mt-4 rtl'>

            <input type='text' className=' bg-rose-100 border rounded-md placeholder:text-gray-500' placeholder='درج کد تخفیف'/>
            <button className=' rounded-md border w-fit h-fit text-xl font-normal'>اعمال کد تخفیف</button>
               </div>
            <button className=' rounded-md border w-fit h-fit text-xl font-normal'>پرداخت</button>
             </div>
        </div>
    </Countainer>
  )
}

export default Cart