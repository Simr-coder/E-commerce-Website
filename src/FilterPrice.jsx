import React, { useState } from 'react'

export default function FilterPrice({data, setFilteredCriteria}) {
  console.log(data);
  console.log('rendering...');
  let min,max

     min = Number(data[0].price);
     max = Number(data[0].price);
    data.map((e) => {
      if (Number(e.price) < min) min = e.price;
      if (Number(e.price) > max) max = e.price;
    });
  
  

    const [width, setWidth] = useState({distOfRight:100,distOfLeft:0,leftC:false,rightC:false});

    function rounded(num){
      num=Math.floor(num)
      let length = num.toString().length
      let tens = 10 ** (length - 1)
      const min = num - (num % tens)
      const max = num - (num % tens)+tens
      return  {min,max}
    }
   const Dmax=rounded(max).max
   const Dmin = rounded(min).min
   let displayMax=rounded(Math.ceil(width.distOfRight)/100*(Dmax-Dmin)+Dmin).min
    let displayMin=rounded(Math.floor(width.distOfLeft)/100*(Dmax-Dmin)+Dmin).min

const moveHandler=(e) => {
if (e.clientX <= (201+28) && width.rightC && e.clientX>28 && (((e.clientX-28)/2)-width.distOfLeft)>16)  setWidth(p=>({...p,distOfRight:((e.clientX-28)/2)}))
else if(e.clientX<(190+28) && width.leftC && (width.distOfRight-((e.clientX-28)/2))>16 && e.clientX>28 ){ 
setWidth(p=>({...p,distOfLeft:(e.clientX-28)/2}))
}  
setFilteredCriteria(prev=>({...prev,filteredPrice:[displayMin,displayMax]}))
}

  return (
    <div onMouseLeave={e=>setWidth(p=>({...p,leftC:false,rightC:false}))} className="price py-4">
            <h1>Price</h1>
            <div onClick={moveHandler}   onPointerMove={moveHandler}
className={`slider relative bg-black h-0.5 w-[200px]  text-xs  `}>
       <div
        style={{ width: `${width.distOfRight-width.distOfLeft}%`, left:`${width.distOfLeft}%` }} className={`slider-filled bg-pink-400 absolute h-0.5`}>
            <div onDrag={moveHandler} onMouseDown={e=>setWidth(p=>({...p,leftC:true}))} className="absolute circle bg-pink-500 w-3 -translate-y-1/2 left-0 h-3 rounded-full "></div>
            <h1  className="absolute top-2 -left-3 select-none ">₹{displayMin}</h1>
            <div onMouseDown={e=>{setWidth(p=>({...p,rightC:true})); }}  className="absolute circle bg-pink-500 w-3 -translate-y-1/2 right-0 h-3 rounded-full "></div>
            <h1 className="absolute top-2 -right-4 select-none ">₹{displayMax}
              </h1>
          </div>
        </div>
      </div>
  )
}
