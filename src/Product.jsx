import React from 'react'
import { Link } from 'react-router'
import RatingImg from './RatingImg'
import ImageWithHeart from './ImageWithHeart';


export default function Product({ name, price, rating, image ,data}) {

return (
<div className='w-[100%] max-w-[186px] my-1 md:max-w-[240px]  border border-gray-300'>
    <div to='/productDetail' className='relative'>
  <Link to='/productDetail' state={data} >
   <img loading='lazy'  className='w-[100%] h-[100%] bg-[#7e7e7e96] '  src={image} alt="" />
  </Link>
  <ImageWithHeart  selectedSize={data.sizes[0]} state={data} />
    </div>
    <div className='p-2'>
        <h1 className=' font-medium'>{name}</h1>
        <p>₹ {price}</p>
       <RatingImg rating={rating} />
        <p className=''>{rating} </p>
    </div>
</div>
)
}
