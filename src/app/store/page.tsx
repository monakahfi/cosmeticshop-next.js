import Countainer from '@/components/Counteinar'
import Pagination from '@/components/Pagination';
import Price from '@/components/Price';
import ProductsItem, { IProductList, IProductProps } from '@/components/ProductsItem'
import Search from '@/components/Search';
import Link from 'next/link'
import React from 'react'

interface IStoreProps{
  params : Promise<{}>;
  searchParams: Promise<{
    page?:string;
    per_page?:string;
    title?:string;
    price?:string;
  }>
}



 async function Store( { searchParams}:IStoreProps) {
  
     const page = (await searchParams)?.page ?? "1";
  const per_page = (await searchParams)?.per_page ?? "3";
  const title = (await searchParams)?.title ?? "";
  const price = (await searchParams)?.price ?? "";
 

   const result = await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${per_page}&title=${title}&price_lte=${price}`,{
    cache: 'no-store'
   });

  const data = await result.json() as IProductList;
  return (
    <Countainer>
      <h1 className='text-right text-2xl font-bold'>فروشگاه</h1>
      <div className=' flex gap-2 mt-0 '>

      <Search/>
      <Price/>
      </div>
      <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit p-2 pb-6  shadow-2xl rounded-xl '/>
      </div>
      <div className=' grid grid-cols-4  gap-4'>
      {
        data.data?.map((i)=>(
          <Link key={i.id} href={`store/${i.id}`}>
              <ProductsItem  {...i}/>
          </Link>
        ))
      }
       
      </div>
      <Pagination pageCount={data.pages} />
    </Countainer>
  )
}

export default Store