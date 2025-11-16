"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function Price() {
  
  const [Price, setPrice] = useState<number>(0);
  const searchParams = useSearchParams();
  const router = useRouter();

  const min = 0;
  const max = 900000;

  const clickHandler = () => {
  
    

    const currentSearchParams = new URLSearchParams(searchParams.toString());
    currentSearchParams.set("price", Price.toString()); 
   

    router.push(`/store?${currentSearchParams.toString()}`);
  };
  return (
    <div className="flex flex-col m-0  bg-rose-300 rounded-lg w-fit h-fit">
      <label className=" font-medium">محدوده قیمت تا : {Price}</label>
      <input
        type="range"
        min={min}
        max={max}
        
       
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <button
        onClick={clickHandler}
        className="bg-rose-300 text-white rounded-lg p-2 "
      >
        اعمال
      </button>
    </div>
  );
}

export default Price;
