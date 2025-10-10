import Countainer from '@/components/Counteinar'
import ProductsItem, { IProductProps } from '@/components/ProductsItem'
import Link from 'next/link'
import React from 'react'

 async function Store() {
   const result = await fetch("http://localhost:8000/products");

  const data = await result.json() as IProductProps[];
  return (
    <Countainer>
      <h1 className='text-right   py-4 font-bold'>فروشگاه</h1>
      <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit pb-6 m-2 shadow-2xl rounded-xl '/>
      </div>
      <div className=' grid grid-cols-4  gap-4'>
      {
        data.map((i)=>(
          <Link key={i.id} href={`store/${i.id}`}>
              <ProductsItem  {...i}/>
          </Link>
        ))
      }
       
      </div>
    </Countainer>
  )
}

export default Store