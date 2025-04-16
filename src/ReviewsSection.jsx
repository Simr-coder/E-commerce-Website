import React from 'react'
import Comment from './Comment'
import RatingBar from './RatingBar'

export default function ReviewsSection({reviews}) {
    let reviewCount={5:0,4:0,3:0,2:0,1:0}
       reviews.map(({rating})=>{
      reviewCount[rating]= ++ reviewCount[rating]
    })

  return (
<section className=' md:w-[50%] border-[rgba(96,96,96,0.43)] px-4 pt-5 mb-4 border md:ml-auto ' >
    <h1 className='text-3xl' >Customer Rating and Reviews</h1>
    <div className="">
        {Object.entries(reviewCount).map(([rating,count])=><RatingBar total={reviews.length} rating={rating} current={count}/>).reverse() }
    </div>        
    <div className=" ">
        {reviews.map(review=> <Comment key={crypto.randomUUID()} review={review} />)}
    </div>
</section>
  )
}
