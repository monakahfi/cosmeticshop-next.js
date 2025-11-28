"use client"
import Countainer from '@/components/Counteinar'
import React, { useState } from 'react'
import cookie from 'js-cookie'
import { redirect, useRouter } from 'next/navigation';

function Login() {
    const [username,setUserName]=useState("");
     const [password,setPassword]=useState("");
       const router = useRouter();
     const clickHandler =()=>{

        const response = {
            token: "lnnckslJBflaSJcfblAJBGEflaBFlRIS",
            expier:7,
        }

        cookie.set("token",response.token , {expires : response.expier})
        redirect("/dashboard")
        // router.push("/dashboard")
     }

  return (
    <Countainer>
           <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit p-2 pb-6  shadow-2xl rounded-xl '/>
      </div>
         <div className='  p-8 mt-3 m-20 mx-auto flex flex-col border bg-rose-300   border-rose-500 shadow- rounded-2xl shadow-red-500 w-fit h-100 justify-center gap-3 items-center '>
            <p    className=' p-2 m-2 text-3xl text-rose-600 font-medium shadow-red-800 shadow box-content ' >ورود کاربر</p>
            <input onChange={(e)=>setUserName(e.target.value)} type="text"     placeholder='نام کاربری ' className=' p-2 m-2 border border-rose-500 rounded  bg-rose-400 w-fit' />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder=' رمز خود را وارد کنید' className=' p-2 m-2 border border-rose-500 rounded  bg-rose-400 w-fit'/>
            <button  onClick={clickHandler}className=' p-2 m-2 border font-bold border-rose-500 bg-rose-400 h-fit  w-20 rounded-2xl'>ورود</button>
         </div>
    </Countainer> 
  )
}

export default Login