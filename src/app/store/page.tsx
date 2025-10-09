import Countainer from '@/components/Counteinar'
import ProductsItem from '@/components/ProductsItem'
import Link from 'next/link'
import React from 'react'

function Store() {


  const data = [
   {
    id:1,
    image:'/pic/1.jfif',
    title:"محصول",
    description:" این محصول به زیباتر شدن شما کمک میکند تا شما درخشان تر باشید ",
    price:50
   },
   {
    id:2,
    image:'/pic/2.jfif',
    title:"محصول",
    description:" این محصول به زیباتر شدن شما کمک میکند تا شما درخشان تر باشید ",
    price:50
   },
   {
    id: 3,
    image:'/pic/3.jfif',
    title:"محصول",
    description:" این محصول به زیباتر شدن شما کمک میکند تا شما درخشان تر باشید ",
    price:50
   },
       {
        id: 4,
        image:'/pic/4.jfif',
        title:"محصول",
        description:" این محصول به زیباتر شدن شما کمک میکند تا شما درخشان تر باشید ",
        price:50
       },
  ]
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