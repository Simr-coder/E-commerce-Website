import React from 'react'
import { Link } from 'react-router'
import Alert from './Alert';

export default function CartItems({ name,quantity,id, price, image, size ,data,setChangedInfo}) {
const handleDelete=e=>{setChangedInfo(p=>{delete p.cart[id].size[size]; return {...p} })}
  return (
    <div className=' flex gap-2 cart-item mb-8 border border-gray-300'>
    <Link to='/productDetail' className=' w-[100px]  h-[100px] ' state={data}>
        <img loading='lazy' className='h-[100%]' src={image} alt="" />
    </Link>
    <div className='p-2 '>
        <h1 className='text-xl font-medium'>{name}</h1>
        <p>₹ {price}</p>
        <p> Size: {size} </p>
         <div className="controls flex items-center gap-4 ">
         <div className="quantity button  flex gap-2  justify-around  ">
             <p className='cursor-pointer' onClick={e=>quantity>1?setChangedInfo(p=>{p.cart[id].size[size]=--p.cart[id].size[size]; return {...p} }):handleDelete(e)} >-</p>
            <p>{quantity} </p>
            <p className='cursor-pointer' onClick={e=> quantity<50?setChangedInfo(p=>{p.cart[id].size[size]=++p.cart[id].size[size]; return {...p} }):''} >+</p>
        </div>
        <div className="remove button cursor-pointer " onClick={handleDelete} >
            <p>Delete</p>
            {/* <Alert/> */}
        </div>
         </div>
    </div>
</div>
  )
}
