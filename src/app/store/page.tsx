import Countainer from '@/components/Counteinar'
import Pagination from '@/components/Pagination';
import Picture from '@/components/picture';
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
  const per_page = (await searchParams)?.per_page ?? "5";
  const title = (await searchParams)?.title ?? "";
  const price = (await searchParams)?.price ?? "";
 

   const result = await fetch(`http://localhost:8000/products?_page=${page}&_per_page=${per_page}&title=${title}&price_lte=${price}`,{
    cache: 'no-store'
   });

  const data = await result.json() as IProductList;
  return (
    <Countainer>
      <h1 className='text-right text-2xl font-bold'>فروشگاه</h1>
      <div className=' flex gap-2 mt-0 max-md:flex-col '>

      <Search/>
      <Price/>
      </div>
      <div>
        <img  src="/pic/5.jpg" className=' w-full h-fit p-2 pb-6  shadow-2xl rounded-xl '/>
      </div>
      <div>
        <Picture/>
      </div>
      <div className=' grid grid-cols-4  gap-4 max-md:grid-cols-1 '>
      {
        data.data?.map((i)=>(
          <Link key={i.id} href={`store/${i.id}`}>
              <ProductsItem  {...i}/>
          </Link>
        ))
 }
      </div>
      <div className='w-full h-100  p-5  mt-6  gap-6  mb-8  ease-in-out  flex  justify-center items-center flex-row-reverse max-md:hidden  relative '>
       
        <p className='w-2xl h-100   shadow-2xl font-medium   ease-in-out  text-xl items-center text-right shadow-rose-400  max-md:h-50 max-md:w-50 max-md:justify-center  '>روتین پوستی مجموعه‌ای از محصولات هدفمند است که به پوست فرصت می‌دهد در بهترین حالت خود بدرخشد.
هر محصول با فرمولی دقیق طراحی شده تا نیازهای خاص پوست را برطرف کند؛ از پاکسازی عمیق تا آبرسانی و تغذیه روزانه.
مواد مؤثره‌ای مانند هیالورونیک اسید، نیاسینامید و ویتامین C در کنار هم، تعادل و شادابی را به بافت پوست بازمی‌گردانند.
استفاده منظم از این محصولات، ظاهر پوست را یکنواخت‌تر کرده و روند پیری را به‌طور ملموس کاهش می‌دهد.
بافت‌های سبک، جذب سریع و رایحه ملایم، تجربه‌ای دلپذیر و لوکس ایجاد می‌کنند.
این روتین انتخابی مطمئن برای افرادی است که به سلامت و زیبایی پوست خود توجه ویژه دارند.
هر قدم از این روتین، سرمایه‌گذاری کوچکی برای داشتن پوستی روشن، سالم و درخشان است.</p>
       
       
        <img src='/pho/5.jfif' className='w-2xl h-100   ease-in-out  transform-content   rounded-2xl shadow-2xl shadow-rose-400  max-md:h-50 max-md:w-50'/>
      
      </div>
      <Pagination pageCount={data.pages}  />

      <div className='m-auto p-2'>
        <p className='flex pt-5 m-auto  pb-2 justify-center font-extrabold text-4xl'>راه های ارتباطی با ما </p>
        <div className='flex  justify-center items-center gap-5 '>
          <img  className=' w-10 h-10' src='/pic/instagram.png' alt="instagram" />
          <img  className=' w-10 h-10' src='/pic/phone-call.png'  alt="phone-call" />
          <img  className=' w-10 h-10' src='/pic/social.png'  alt="whatsapp" />
        </div>
        <p  className='flex pb-3 pt-3 justify-center font-extrabold text-2xl'>با ما در تماس باشید </p>
      </div>
    </Countainer>
  )
}

export default Store