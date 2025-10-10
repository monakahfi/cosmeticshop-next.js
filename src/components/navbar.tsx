"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Countainer from "./Counteinar"



function Navbar() {
    const pathName = usePathname()
    const navLinks= [
        {
          href:"/",
          title:" خانه ",
        },
        {
          href:"/store",
          title:"فروشگاه", 
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
          <div>
              <Link href="/cart" className="text-2xl font-medium ">سبد خرید 
                
              </Link>
            </div>
                </div>
                  
            </Countainer>
       
        
    </nav>
  )
}

export default Navbar