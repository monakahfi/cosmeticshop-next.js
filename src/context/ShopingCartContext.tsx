"use client"
import React, { createContext, useContext, useState } from "react";

 const ShopingCartContext = createContext({} as TShopingCartContext);

export const useShopingCartContext =()=>{
    return useContext(ShopingCartContext)
}
type TShopingCartContextProviderProps ={
    children : React.ReactNode
}

type CartItem={
    id:number ;
    qty:number; //counter of stuff
}

type TShopingCartContext ={
    cartItem : CartItem[];
}


function ShopingCartContextProvider({children}:TShopingCartContextProviderProps) {

    const [cartItem ,setCartItem]=useState<CartItem[]>([])
  return (
    <ShopingCartContext.Provider value={{cartItem}}>

        {children}

    </ShopingCartContext.Provider>
  )
}

export default ShopingCartContextProvider