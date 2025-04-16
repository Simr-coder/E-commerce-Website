import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

export default function AddToCartButton({selectedSize,userInfo,setChangedInfo,state}) {
  const navigate=useNavigate()
 
    let added
    let size=userInfo.cart[state.id]?.size //if product hasn't been added it will return undefined
  if(size){//to check if products selected size exist in cart
    added=  size[selectedSize]?true:false
  }
  const handleClick=()=>{
    if(!added) //if the given size of product isn't added
    setChangedInfo(p=>{
    if(!(p.cart[state.id])){
      p.cart[state.id]={...state,size:{}} //to add product not present in cart
      p.cart[state.id]['size'][selectedSize]=1
    }
    else if(!(p.cart[state.id].size[selectedSize])){ //to add product present in cart along with other size
      p.cart[state.id]['size'][selectedSize]=1
    }
    return ({...p})
  })
  else    //if the given size of product already added, it will navigate to yourCart route
    navigate('/yourCart')
  }
    
return (
    <button onClick={handleClick} className="button"> {added?'Go to Cart':'Add to Cart'}</button>

  )
}
