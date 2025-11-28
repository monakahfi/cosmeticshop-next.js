"use client"
import Countainer from '@/components/Counteinar'
import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

function Dashboard() {
     const  [newProduct,setNewProduct]=useState({
        title:" ",
        price:" ",
        image: " ",
        description :" "

     })
    const clickHandler =()=>{
         console.log(newProduct)
         axios({
            method: "POST",
            url:"http://localhost:8000/products",
            data:{
                 id: Math.floor(Math.random() * 1000 ).toString(),
        image:newProduct.image,
        title: newProduct.title,
        description:newProduct.description,
        price: newProduct.price,
            }
         })
    }

  const changeProductHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value, files } = e.target as HTMLInputElement;

  if (name === "image" && files && files[0]) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProduct({
        ...newProduct,
        image: reader.result as string, // base64 string
      });
    };
    reader.readAsDataURL(files[0]);
  } else {
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  }
 
};


  return (
    
       <div className=' bg-rose-400'>
         <Countainer>

           <div className=' flex flex-col gap-4 p-2  justify-between rtl'>
            <input type="text" onChange={changeProductHandler} name='title' className=' p-2  w-fit h-fit border bg-white content-center-safe border-rose-600'  placeholder=' عنوان خود را وارد کنید ' />
            <input type="text" onChange={changeProductHandler} name='price' className=' p-2   w-fit h-fit border bg-white content-center-safe border-rose-600' placeholder='قیمت خود را وارد کنید ' />
            <input type='file' onChange={changeProductHandler} name='image' className=' p-2   w-fit h-fit border bg-white content-center-safe border-rose-600' placeholder='عکس خود را وارد کنید ' />
            <textarea placeholder='توضیحات خود را وارد کنید '  name='description' onChange={changeProductHandler} className=' p-2  border  w-fit h-fit bg-white content-center-safe border-rose-600'> </textarea>
           </div>
            <button onClick={clickHandler} className=' p-2   w-fit h-fit border  bg-rose-300 content-center-safe border-rose-600'>ساخت محصول جدید</button>
        </Countainer>
       </div>
    
  )
}

export default Dashboard