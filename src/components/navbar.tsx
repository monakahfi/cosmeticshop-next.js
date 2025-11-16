"use client"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import Countainer from "./Counteinar"
import { useContext } from "react";
import { useShopingCartContext } from "@/context/ShopingCartContext";
import  cookies from "js-cookie"



function Navbar() {
    const pathName = usePathname();
    const {cartTotalQty}= useShopingCartContext();
    const navLinks= [
        {
          href:"/",
          title:" خانه ",
        },
        {
          href:"/store",
          title:"فروشگاه", 
        },
        {
          href:"/dashboard",
          title:" داشبورد "
        },
         {
          href:"/login",
          title:" ورود "
        }
    ]
  return (
    <nav className="flex shadow p-4 ">
       <Countainer>
                          <div className="flex  justify-between flex-row-reverse">
                            <div className="gap-2">
         {navLinks.map((i)=>(
             
             <Link key={i.href} className={`mr-4  text-2xl font-medium ${pathName === i.href ? "text-rose-700":"text-black"}`} href={i.href}>{i.title}</Link>
            ))}
             </div>
          <div className="flex flex-row-reverse">
            <span className="px-2 py-1  bg-rose-700 text-white rounded-full w-fit h-fit">{cartTotalQty}</span>
              <Link href="/cart" className="text-2xl font-medium ">
                <img className="w-10 h-10" src="/pic/shop.png"/>
              </Link>
              <button onClick={()=>{ cookies.remove("token") 
                redirect("/login")
              }} className="w-10 h-6 mx-3"><img  src="/pic/exit.png"/></button>
            </div>
                </div>
                  
            </Countainer>
       
        
    </nav>
  )
}

export default Navbar