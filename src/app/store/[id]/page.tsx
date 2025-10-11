import AddToCart from '@/components/AddToCart';
import Countainer from '@/components/Counteinar'
import { IProductProps } from '@/components/ProductsItem';

import React from 'react'


interface IProductIdProps {
  params : Promise <{id:string}>,
  searchparams : Promise <{}>
}

async function ProductId(props :IProductIdProps) {

  const {id} = await props.params;
  
  const result = await fetch(`http://localhost:8000/products/${id}`, { cache: "no-store" });
  
    const data = (await result.json()) as  IProductProps;
  return (
    <Countainer>
          <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit pb-6 m-2 shadow-2xl rounded-xl '/>
      </div>
        <div className=' grid grid-cols-12 shadow-2xl mt-8 gap-4'>
         
            <div className=' col-span-9 rtl text-right p-5'>
                
                <h1 className='font-bold text-xl mb-4 '>{data.title}</h1>
                <p className=' font-mono text-gray-700 text-xl mb-12'>{data.description}</p>
                <p className=' font-mono text-gray-700 text-xl mb-12'><span>{data.price}</span>$</p>
                
              
           <AddToCart/>
            </div>
            <div className=' col-span-3 shadow-2xl bg-purple-400 '>
                <img src={data.image}/>
            </div>

        </div>
    </Countainer>
  )
}

export default ProductId