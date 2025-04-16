import React, { useEffect, useState } from 'react'

export default function SortingProduct({setData }) {
    const [selectedSort,setSelectedSort]=useState({incOfPrice:false,decOfPrice:false,decOfRating:false})

useEffect(()=>{
    setData(p => { p.map((ep, i) => {let Index = i;
        for (let j = i + 1; j < p.length; j++) {
            if (Number(p[j].price) <Number( p[Index].price )&& selectedSort.incOfPrice) 
                Index = j;
            else if(Number(p[j].price) >Number( p[Index].price )&& selectedSort.decOfPrice)
                Index = j;
            else if(Number(p[j].rating) >Number( p[Index].rating )&& selectedSort.decOfRating)
                Index = j;
        }
        let temp = p[i];
        p[i] = p[Index];
        p[Index] = temp;
    })
    return [...p]
}
)
},[selectedSort])



    return (
        <div className='max-w-[90%] md:p-12 p-3 top-2 z-[4] bg-white shadow-2xl md:text-xl fixed w-[400px]' >
            <h1 className='md:text-2xl font-bold my-3' >Sort By</h1>
            <div className="flex flex-col gap-1">
                <p onClick={(e)=>{ e.stopPropagation() 
                    setSelectedSort(p=>({decOfRating:false,decOfPrice:false,incOfPrice:true}))}} className={`cursor-pointer onHover border-b pb-3 ${selectedSort.incOfPrice?'selected':''} `} >Price: <span>High to Low</span></p>
                <p onClick={(e)=>{e.stopPropagation() 
                    setSelectedSort(p=>({incOfPrice:false,decOfRating:false,decOfPrice:true}))}} className={`cursor-pointer onHover border-b pb-3 ${selectedSort.decOfPrice?'selected':''} `}>Price: <span>Low to High</span></p>
                <p onClick={(e)=>{e.stopPropagation() 
                    setSelectedSort(p=>({incOfPrice:false,decOfRating:true,decOfPrice:false}))}} className={`cursor-pointer onHover border-b pb-3  ${selectedSort.decOfRating?'selected':''} `}>Rating</p>
            </div>
            <p className="button max-w-fit md:leading-4 ">Close</p>
        </div>
    )
}
