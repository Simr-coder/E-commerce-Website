import React, {  useState } from 'react'
import { Link, useLocation, useOutletContext } from 'react-router'
import RatingImg from './RatingImg';
import ReviewsSection from './ReviewsSection';
import AddToCartButton from './AddToCartButton';
import heartIcon from './assets/heart-icon-svg-29.jpg'
import ImageWithHeart from './ImageWithHeart';

export default function ProductDetail() {
  const { state } = useLocation()
  const { setChangedInfo, userInfo }=useOutletContext();
  const [selectedSize,setSize]=useState(state.sizes[0])

  return (
    <main>
      <section className='flex gap-4 m-2 flex-wrap justify-around' >
        <div className=" max-w-[500px] h-[500px] relative  overflow-hidden grow rounded-xl border-[rgba(96,96,96,0.43)]  border">
   <img loading='lazy'  className='w-[100%] h-[100%] bg-[#7e7e7e96] ' src={state.images[0]} alt="" />
          <ImageWithHeart selectedSize={selectedSize} state={state}  />
        </div>
        <div className="md:max-w-1/2 md:p-8 md:text-xl ">
          <h1 className='md:text-3xl mb-4 font-semibold' >{state.name} </h1>
          <p className="">{state.description} </p>
          <div className='rating-container' > <p>{state.rating}  </p> <RatingImg rating={state.rating} /></div>
          <p className='md:text-2xl font-medium' >₹ {state.price} </p>
          <div className="size border px-3 py-6 rounded-2xl my-12">
            <p className="text-2xl mb-4 font-medium ">Select Size</p>
            <div className="sizes grid-c ">
              {state.sizes.map(size => <p onClick={e=>setSize(size)} className={`${selectedSize==size?'selected':''}`} key={size}> {size} </p>)}
            </div>
          </div>

            <div className="flex gap-4">
          <AddToCartButton state={state} setChangedInfo={setChangedInfo} userInfo={userInfo} selectedSize={selectedSize} />
              <button className="button"> <Link to='/'>Buy Now</Link> </button>
            </div>
          {/* <div className="flex gap-4">
            <button onClick={e=>{setAdded(true)
            if(!added)
              setChangedInfo(p=>{
              // p.cart[state.id]=p.cart[state.id]?{...state}:{...state,size:{}}
              if(!(p.cart[state.id])){
                p.cart[state.id]={...state,size:{}}
                p.cart[state.id]['size'][selectedSize]=1
              }
              else if(!(p.cart[state.id].size[selectedSize])){
                p.cart[state.id]={...state,size:{...p.cart[state.id]['size']}}
                p.cart[state.id]['size'][selectedSize]=1
              }
              else{
                p.cart[state.id]={...state,size:{...p.cart[state.id]['size']}}
                p.cart[state.id]['size'][selectedSize]=++p.cart[state.id]['size'][selectedSize]
              }
              return ({...p})
            })
            else
              navigate('/yourCart')
            }} className="button"> {added?'Go to Cart':'Add to Cart'}</button>
            <button className="button"> <Link to='/'>Buy Now</Link> </button>
          </div> */}
        </div>
      </section>
      <ReviewsSection reviews={state.reviews}/>
    </main>
  )
}
