import axios from "axios"
import { useEffect, useState } from "react"
import { IProductProps } from "./ProductsItem"
import AddToCart from "./AddToCart"

interface ICartItemsProps{
  id:number,
  qty:number,
}

function CartItem({id , qty}:ICartItemsProps) {
  const [cartId,setCartId]=useState<IProductProps>()

  useEffect(()=>{
    axios(`http://localhost:8000/products/${id}`).then((result)=>{
       const {data}=result;
       setCartId(data);
    })
  },[])
  return (
   <div className=' grid grid-cols-12 bg-rose-300 mb-4'>
             <div className=' col-span-10  text-right p-4'>
               <h3 className='text-3xl font-extrabold'>{cartId?.title} </h3>
               <p className='text-xl font-semibold'><span>{qty}</span>:تعداد محصول</p>
               <p className='text-xl font-semibold'><span>{cartId?.price}</span>:قیمت محصول </p>
             
                 <div className='flex flex-row gap-6 mt-5'>
            
             <AddToCart id={id.toString()}/>
              </div>
             </div>
            <img  src={cartId?.image} className=' col-span-2 '/>
         </div>
        
  )
}

export default CartItem