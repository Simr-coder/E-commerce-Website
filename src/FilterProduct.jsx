import React, { useEffect, useState } from "react";

import FilterPrice from "./FilterPrice";
import { Link } from "react-router";
const AllSizes=['S','M','L','XL','XXL','Free Size','One Size','Adjustable']
export default function FilterProduct({ data,setData,Categorydata }) {
  //lekin ye wala purana filterCriteria nhi use kr rha , wapis s render kra rha
  const [filterCriteria, setFilteredCriteria] = useState({ filteredSize: '', filteredRating: 0, filteredPrice: [0,Infinity] })

  
useEffect(()=>{
  setData((prev)=>{ console.log(prev);

  const nD= Categorydata.filter((each)=>  {
    if(each.sizes.join(' ').includes(filterCriteria.filteredSize) && each.rating>= filterCriteria.filteredRating && Number(each.price)<filterCriteria.filteredPrice[1] &&  Number(each.price)>filterCriteria.filteredPrice[0]  )
       return true
      })
      console.log(nD);
      return [...nD]
  })
},[filterCriteria])
  return (
    <div className="filterField max-w-[90%] rounded-2xl p-3 top-2 z-[4] bg-white shadow-2xl md:text-xl fixed w-[400px] ">
      <div onClick={e=>e.stopPropagation()} className="filter-category  ">
        <div className="size-filter">
          <h1>Sizes</h1>
          <div className="sizes  flex  flex-wrap">
           {AllSizes.map(e=> <p onClick={()=>setFilteredCriteria(p=>({...p,filteredSize:e}))} className={`${filterCriteria.filteredSize==e?'selected':''}`} key={e}>{e}</p> )}
          </div>
        </div>

        <div className="rating-filter">
          <h1  >Rating</h1>
          <select onChange={e=>setFilteredCriteria(p=>({...p,filteredRating:e.target.value}))} name="rating-filter" id="rating-filter">
            <option value="0">Any</option>
            <option value="2">2.0 +</option>
            <option value="3">3.0 +</option>
            <option value="4">4.0+</option>
            <option value="4.5">4.5+</option>
          </select>
        </div>
 
        
      <FilterPrice  setFilteredCriteria={setFilteredCriteria} data={Categorydata}/>
      </div>
     <div className="button max-w-fit cursor-pointer leading-4" >Apply </div>
    </div>
  );
}
