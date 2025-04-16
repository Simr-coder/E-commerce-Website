import React from 'react'
import RatingImg from './RatingImg'

export default function Comment({review}) {
    const {comment,rating,user,avatar,date_of_purchase}=review
  return (
<div className="p-8 border-y-[0.5px] border-y-[rgba(74,234,221,0.136)] ">
  <div className="max-w-[200px] flex gap-2">
        <div className="shadow border-2 border-white  overflow-hidden rounded-full">
            <img className=' w-[32px] h-[32px]' src={avatar} alt="" />
        </div>
        <div className="">
            <p className='md:text-xl font-medium' >{user} </p>
            <p className='text-xs leading-1 text-gray-500 ' > {date_of_purchase} </p>
        </div>
  </div>
  <div className="rating-container">
          <p>{rating}.0 </p>
          <RatingImg rating={rating}/>
  </div>
  <p>{comment} </p>
</div>
  )
}
