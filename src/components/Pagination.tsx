"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import ReactPaginate from 'react-paginate'

function Pagination({pageCount}:{pageCount:number}) {

     const searchParams = useSearchParams()
  
    
    const router = useRouter()
    const handlePageClick =(e:{selected:number})=>{
              const currentSearchParams = new URLSearchParams(searchParams.toString())

        const page = e.selected + 1
        currentSearchParams.set("page", page.toString())
        currentSearchParams.set("per_page","2")
      router.push(`/store?${currentSearchParams.toString()}`)
    }
  return (
    <div>
        
      <ReactPaginate
      className=' cursor-pointer flex  font-extrabold  bg-rose-500  justify-between gap-0'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination