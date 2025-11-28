export interface IProductProps{
 id: number,
        image:string,
        title:string,
        description:string,
        price:number
}

export interface IProductList {
  first: number| null,
  prev: number| null ,
  next: number| null,
  last: number| null,
  pages: number,
  items: number| null,
  data : IProductProps[],
}

function ProductsItem({image,title,description,price}:IProductProps) {
  return (
    <>
          <div className=' h-fit  shadow-2xl max-md:w-fit max-md:h-fit '>
          <img src={image} className='p-4 rounded-md shadow max-md:w-fit max-md:h-fit max-md:p-8'/>
          <div className='p-2 text-right  rtl font-medium '>
            <h1 className=" font-extrabold pt-2">{title}</h1>
            <h5 className=" pb-1 text-gray-700 font-extralight">{description}</h5>
            <p className=" pt-2 font-mono text-left">قیمت:<span>{price}</span>$</p>
          </div>
        </div>
       

    </>
  )
}

export default ProductsItem