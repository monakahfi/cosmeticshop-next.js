import Countainer from "@/components/Counteinar";
import Image from "next/image";

export default function Home() {
  return (
   <Countainer>
       <div className=" w-full h-full justify-center">
        <img  src="/pic/5.jpg" className=' w-full h-fit p-2 shadow-2xl rounded-xl '/>
      <p className=" text-5xl font-extrabold text-rose-500 items-center text-right"> به فروشگاه انلاین ما خوش امدید برای دیدن از محصولات گزینه فروشگاه را بزنید </p>
      </div>

   </Countainer>
  );
}
