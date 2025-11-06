"use client"
import CartItem from '@/components/CartItem'
import Countainer from '@/components/Counteinar'
import { IProductProps } from '@/components/ProductsItem'
import { useShopingCartContext } from '@/context/ShopingCartContext'
import { FormatNumber } from '@/utilis/number'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


interface IDiscountdata {
  id : number,
  code: string,
  precentage : number
}

function Cart() {
    const { cartItems}= useShopingCartContext();
    const [cartId,setCartId]=useState<IProductProps[]>([])
    const [discountscode,setDiscountscode]=useState<string>("")
    const [finalPrice,setFinalPrice]=useState<number>(0)
    const [disCountsPrice,setDisCountsPrice]=useState<number>(0)

  useEffect(()=>{
    axios(`http://localhost:8000/products`).then((result)=>{
       const {data}=result;
       setCartId(data);
    })
  },[])

  let totalPrice =  cartItems.reduce((total,item)=>{
                let selectedProduct = cartId.find((product)=> product.id == item.id)
                return total + (selectedProduct?.price || 0  )  * item.qty + 40000
              },0)

  const DiscountHandler =()=>{
    axios(`http://localhost:8000/discounts?code=${discountscode}`)
    .then(result => 
    {
      const data = result.data as IDiscountdata[]
      let disCountedPrice = totalPrice * data[0]?.precentage / 100 
      const finalPrice = totalPrice - disCountedPrice
      setFinalPrice(finalPrice)
      setDisCountsPrice(disCountedPrice)
    }
    )
    
  }

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

            <h3 className='rtl'>قیمت بدون تخفیف:<span>{FormatNumber(totalPrice)
              
              
              }</span></h3>
            <h3 className='rtl'>سود شما از این خرید:<span>{FormatNumber(disCountsPrice)}$</span></h3>
            <h3 className='rtl'>قیمت پست:<span>40$</span></h3>
            <h3 className='rtl'>قیمت کل:<span>{FormatNumber(finalPrice)}$</span></h3>
             <div className='flex flex-col py-4'>
               <div className='flex flex-row text-right  mt-4 rtl'>

            <input type='text'
            onChange={(e)=>setDiscountscode(e.target.value)}
            className=' bg-rose-100 border rounded-md placeholder:text-gray-500' placeholder='درج کد تخفیف'/>
            <button 
            onClick={DiscountHandler}
            className=' rounded-md border w-fit h-fit text-xl font-normal'>اعمال کد تخفیف</button>
               </div>
            <button className=' rounded-md border w-fit h-fit text-xl font-normal'>پرداخت</button>
             </div>
        </div>
    </Countainer>
  )
}

export default Cart