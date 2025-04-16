import React from 'react'
import { Link } from 'react-router'

export default function NotPresent({image,title,buttonText,buttonUrl}) {
  return (
    <div className='md:w-1/2 mx-auto text-center'  >
    <img className='mx-auto' src={image} alt="" />
    <h1 className='text-xl' >{title}</h1>
    <Link to={buttonUrl} ><button className="button  ">{buttonText}</button></Link>
  </div>
  )
}
