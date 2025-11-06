"use client"
import { join } from "path";
import React, { createContext, useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";

 const ShopingCartContext = createContext({} as TShopingCartContext);

export const useShopingCartContext =()=>{
    return useContext(ShopingCartContext)
}
type TShopingCartContextProviderProps ={
    children : React.ReactNode
}

type CartItems={
    id:number ;
    qty:number; //counter of stuff
}

type TShopingCartContext ={
    cartItems  : CartItems[];
    increaseHandler:(id :number)=>void;
    decreaseHandler:(id :number)=>void;
    deleteHandler:(id :number)=>void;
    getProductQty :(id :number)=> number;
    cartTotalQty :number;
}


function ShopingCartContextProvider({children}:TShopingCartContextProviderProps) {

    const [cartItems ,setCartItem]=useState<CartItems[]>([]);

    const cartTotalQty = cartItems.reduce((totalQty,items)=>{
        return totalQty + items.qty
    },0)

    const getProductQty = (id : number)=>{
         return cartItems.find(item => item.id == id)?.qty || 0
    }
    const increaseHandler = ( id: number)=>{
        setCartItem(currentItem =>{
            let isNotProductExist = currentItem.find(item => item.id == id) == null;
            if(isNotProductExist){
               return [...currentItem ,{id:id ,qty:1}]
            } //if not exist add on
            else{
               return currentItem.map((item) =>{
                    if(item.id == id){
                    return {
                            ...item , 
                            qty : item.qty + 1
                    } }else {
                        return item
                    }
            })
            } //if exist add 1 to them
        })
    }

    const decreaseHandler = (id:number)=>{
      setCartItem(currentItems=>{
        let islastOne = currentItems.find(item => item.id == id)?.qty == 1 // اگر محصول وجود داشت 

        if(islastOne){
            return currentItems.filter(item => item.id != id) // فقط همین یدونه هست 
        }else{
            return currentItems.map(item =>{
                if(item.id == id){

                    return {
                         ...item ,
                         qty: item.qty - 1
                    }
                }// محصول بیشت از یدونه هست میخوایم کم کنیم
                else{
                    return item // محصول مورد نظر ما نیست 
                }
         } )
        }
      })
    }

    const deleteHandler = (id :number)=>{
        setCartItem(currentItems =>{
          return currentItems.filter(item => item.id != id)
        })
    }

    useEffect(()=>{
        const storedCartItems =localStorage.getItem("cartItems")

        if(storedCartItems){
            setCartItem(JSON.parse(storedCartItems))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    },[cartItems])
  return (
    <ShopingCartContext.Provider value={{cartItems ,increaseHandler,decreaseHandler,deleteHandler,getProductQty,cartTotalQty}}>

        {children}

    </ShopingCartContext.Provider>
  )
}

export default ShopingCartContextProvider