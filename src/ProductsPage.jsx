import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Alldata from './assets/productsData.json'
import ProductList from './ProductList'
import FilterProduct from './FilterProduct'
import SortingProduct from './SortingProduct'
import filterSvg from './assets/filter.svg'



export default function ProductsPage() {
  let Categorydata = useLocation().state
  const [showPopup,setShowPopup]=useState({sort:false,filter:false})
  const [fromProduct, setFromProduct] = useState(0)
  const [toProduct, setToProduct] = useState(32)
  const scrollAbove = () => {
    document.querySelector('#products')?.scrollIntoView();
  };

 Categorydata=  Categorydata ?Categorydata : Alldata
 //search ka use krke wapis ye page navigate/render kra rhe toh, data apna purana hi CategoryData use kr rha, wapis s ye nya nhi use r rha
 const [data,setData]=useState(Categorydata)
 console.log('data',data);
 useEffect(()=>{ 
   Categorydata ? setData(Categorydata) : ''
  },[Categorydata])

  let passdata = []
  for (let i = fromProduct; i < toProduct; i++) {
    if (data[i]) { passdata[i - fromProduct] = data[i] }
  }

  return (
    <main onClick={()=>setShowPopup(prev=>({filter:false,sort:false}))} id='products' >
          <div className=" p-4 flex items-center">
    <div onClick={(e)=>{ e.stopPropagation()
      setShowPopup(prev=>({...prev,filter:true}))}} className="sortButton cursor-pointer items-center flex border border-gray-700 rounded-full px-2 max-w-fit">
    <img className='w-[18px] h-[16px] ' src={filterSvg} alt='Sorting icon' />
    <p className=" ">Filter</p>
    </div>
     {showPopup.filter? <FilterProduct Categorydata={Categorydata} setData={setData} data={data}/>:'' }
    <div onClick={(e)=>{ e.stopPropagation()
      setShowPopup(prev=>({...prev,sort:true}))}} className="sortButton cursor-pointer items-center flex border border-gray-700 rounded-full px-2 max-w-fit">
    <img className='w-[18px] h-[16px] ' src={filterSvg} alt='Sorting icon' />
    <p className=" ">Sort</p>
    </div>
   { showPopup.sort? <SortingProduct  setData={setData} data={data} /> :''}
          </div>
      <ProductList data={passdata} />
      <div className="w-[90%] max-w-[360px] mx-auto flex justify-around gap-2 mb-12 text-2xl ">
        <p className={`button cursor-pointer ${fromProduct != 0 ? '' : 'inactivate'} `}
          onClick={() => { if (fromProduct != 0) { setFromProduct(fromProduct - 32); setToProduct(toProduct - 32); scrollAbove() } }} >&lt;&lt; Prev</p>
       <p className={`button cursor-pointer ${toProduct < data.length ? '' : 'inactivate'} `}
          onClick={() => {
            if (toProduct < data.length) { setFromProduct(fromProduct + 32); setToProduct(toProduct + 32); scrollAbove() }
          }} >Next &gt;&gt;</p>
      </div>
    </main>
  )
}
