"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

function Search() {

   const searchParams = useSearchParams()

    const router = useRouter()

    const [search,setSearch]=useState<string>("")

    const searchHandler = ()=>{

        const currentSearchParams = new URLSearchParams(searchParams.toString())

        currentSearchParams.set("title",search)
        
        router.push(`/store?${currentSearchParams.toString()}`)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="search🔎" className=' bg-red-400 border-rose-800 rounded-md border-2'/>
        <button onClick={searchHandler} className='p-2 bg-rose-500 rounded-md text-white font-medium '>جستجو</button>
    </div>
  )
}

export default Search