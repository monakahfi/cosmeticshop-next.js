"use client"

import { useShopingCartContext } from "@/context/ShopingCartContext";



interface IAddToCart{
  id:string
}

function AddToCart({id}:IAddToCart) {

    const{ cartItems , increaseHandler,decreaseHandler,deleteHandler,getProductQty}=useShopingCartContext();

    console.log(cartItems)
  return (
       <div className='flex flex-row-reverse gap-6 mt-5'>
            
              <button onClick={()=>increaseHandler(parseInt(id))}className='h-12 w-12 bg-rose-400 shadow-2xl rounded-3xl items-end'>+</button>
                <p className='my-4'>{getProductQty(parseInt(id))}</p>
                <button onClick={()=>decreaseHandler(parseInt(id))} className='h-12 w-12 bg-rose-400 shadow-2xl  rounded-3xl items-end'>-</button>
                <button  onClick={()=>deleteHandler(parseInt(id))} className='h-12 w-12 bg-rose-400 shadow-2xl rounded-3xl items-end'><img src='/pic/delete.svg' className="w-10 h-9 p-0.5"/></button>
              </div>
  )
}

export default AddToCart