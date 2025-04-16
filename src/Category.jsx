import React from 'react'
import { Link } from 'react-router'

export default function Category({category,productsArr}) {
return (
<div className='bg-white rounded-3xl relative z-[2] -mt-6  overflow-hidden ' >
<Link to='/product' state={productsArr} >
<h1 className='p-4 text-2xl bold nav ' >{category} <span>➔</span> </h1>
</Link>
<div className="categoty-container justify-around  flex flex-wrap">
 <img className='w-[45%]' src={productsArr[0].images[0]} alt="" />
 <img className='w-[45%]' src={productsArr[1].images[0]} alt="" />
 <img className='w-[45%]' src={productsArr[2].images[0]} alt="" />
 <img className='w-[45%]' src={productsArr[3].images[0]} alt="" />
</div>
</div>
  )
}
