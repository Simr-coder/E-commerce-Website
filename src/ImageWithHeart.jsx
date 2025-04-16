import React from 'react'
import { useOutletContext } from 'react-router';

export default function ImageWithHeart({state,selectedSize}) {
    const { setChangedInfo, userInfo }=useOutletContext();  
    let added
    let size=userInfo.wishList[state.id]?.size //if product hasn't been added it will return undefined
  if(size){
    added=  size[selectedSize]?true:false//to check if products selected size exist in wishList
  }
  //TO ADD ITEM IN WISHLIST
  const handleClick=(e)=>{

    if(!added) //to add product of given size in wishList 
     setChangedInfo(p=>{
    if(!(p.wishList[state.id])){
      p.wishList[state.id]={...state,size:{}}
      p.wishList[state.id]['size'][selectedSize]=1
    }
    else if(!(p.wishList[state.id].size[selectedSize])) 
     { p.wishList[state.id]['size'][selectedSize]=1}
   
    return {...p}
  })
  else setChangedInfo(p=>{delete p.wishList[state.id].size[selectedSize]; return {...p} })
  }
  return (
   <>
          <div onClick={handleClick} className="icon top-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="N1bADF" width="28" height="28" viewBox="0 0 20 16">
          <path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
        fill={`${added?'red':'#7e7e7e96'}`} class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#2874F0" class="x1UMqG" stroke="#FFF" fill-rule="evenodd" opacity=".9"></path></path></svg>
 </div>
   </>
  )
}
