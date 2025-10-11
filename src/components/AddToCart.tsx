"use client"

import { useShopingCartContext } from "@/context/ShopingCartContext";
import { useContext } from "react"

function AddToCart() {

    const{ cartItem }=useShopingCartContext();
  return (
       <div className='flex flex-row-reverse gap-6 mt-5'>
            
              <button className='h-12 w-12 bg-rose-400 shadow-2xl rounded-3xl items-end'>+</button>
                <p className='my-4'>3</p>
                <button className='h-12 w-12 bg-rose-400 shadow-2xl  rounded-3xl items-end'>-</button>
              </div>
  )
}

export default AddToCart