import React from 'react'

export default function RatingBar({total,current,rating}) {
  const widthPercent=(current*100/total)+'%'
  return (
   <div className='flex items-center gap-2 bar' >
    <p>{widthPercent} </p>
    <div className="box ">
    <div style={{width:widthPercent}} className="filled-box"></div>
  </div>
  <p className='leading-2  shrink-0' >{rating} star </p>
   </div>

  )
}
