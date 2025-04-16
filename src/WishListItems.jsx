import React from 'react'
import { Link } from 'react-router'
import AddToCartButton from './AddToCartButton';

export default function  WishListItems({ name,id, price, image, size ,data,setChangedInfo,userInfo}) {

  return (
    <div className=' flex gap-2  mb-8 border border-gray-300'>
    <Link to='/productDetail' className=' w-[100px]  h-[100px] ' state={data}>
        <img loading='lazy' className='h-[100%]' src={image} alt="" />
    </Link>
    <div className='p-2 '>
        <h1 className='text-xl font-medium'>{name}</h1>
        <p>₹ {price}</p>
        <p> Size: {size} </p>
         <div className="controls flex items-center gap-4 ">
        <AddToCartButton selectedSize={size} state={data} setChangedInfo={setChangedInfo} userInfo={userInfo} />
        <div className="remove button cursor-pointer " onClick={e=>{setChangedInfo(p=>{delete p.wishList[id].size[size]; return {...p} })}} >
            <p>Delete</p>
        </div>
         </div>
    </div>
</div>
  )
}
