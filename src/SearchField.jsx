import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import data from './assets/productsData.json'

export default function SearchField() {
  const navigate = useNavigate();
  const [value,setValue]=useState('')
   const searchedProducts=data.filter(p=>{
if(p.name.toLowerCase().includes(value.toLowerCase()) || p.description.toLowerCase().includes(value.toLowerCase()) || eval(p.tags.map(e=>value.toLowerCase().includes(e)).join(' || '))  ){
return p
    }
   })
  return (
    <div className={`search-field z-4 outline-1 flex  border text-base  rounded-xl bg-white  ` }>
      <input value={value} onChange={e=>{setValue(e.target.value)}}  onKeyDown={e=>{if(e.key=='Enter'&& /\b[ ]*\b/.test(value) )  navigate('/product',  { state: searchedProducts })}}  placeholder='Search for Sari,T-shirt,kurta,etc ' className='p-2 w-[95%] outline-0 ' type="text"  />

<img className='w-[32px] h-[32px] cursor-pointer ' 
onClick={e=>{if(e.key=='Enter'&& /\b[ ]*\b/.test(value) )  navigate('/product',  { state: searchedProducts })}}
  src="https://th.bing.com/th/id/OIP.9-l9QQfhMfbvYNTRGgp30gHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3" alt="" />
    </div>
  )
}



/*
agar ham,1) <link tag> ka use krke h toh same page m navigate krta h, wo page nya page nhi kholta
         2)navigate nya kholta(with different-different location's state)
    But, dono hi uss page k useState ko nhi wapis bulata agar same ko hi navigate kr rhe h , purana hi usekrta h******(wow point) 
  
point 2 helps to navigate using in given condition
point 1 helps when bhut sari pages create nhi krni

//That means I am actually saying, re-render the page by changing the Location's state
*/