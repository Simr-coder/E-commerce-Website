import React from 'react'
import {  useOutletContext } from 'react-router';
import CartItems from './CartItems';
import NotPresent from './NotPresent';

export default function UserCart() {
    const { setChangedInfo, userInfo }=useOutletContext();
    let total=0
    let isEmpty=true
    let totalQuantity=0
 Object.values(userInfo.cart).map(e=>{const {name,images,price,id,size}=e;
   Object.entries(size).map(([s,quantity])=>{
      isEmpty=false
      totalQuantity+=quantity
   })})

  return (
   <main className='px-2 cart' >
    <h1 className='text-xl font-bold my-3 text-center ' >My Cart</h1>
    {isEmpty?
     <NotPresent title='Your Cart empty' buttonText='Shop Now' buttonUrl='/' image={'https://th.bing.com/th/id/OIP.JkXyqUoaXS4d6o224MTkOQHaE8?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7'} />
:    <div className="flex flex-col items md:flex-row justify-around gap-8">
        <div className=" md:w-[40%]">
          {Object.values(userInfo.cart).map(e=>{
            const {name,images,price,id,size}=e;
           return Object.entries(size).map(([s,quantity])=> <CartItems setChangedInfo={setChangedInfo} data={e} id={id} key={id} size={s} quantity={quantity} image={images[0]} name={name} price={price} />)
                     })}
                    
        </div>
  
           <div className="price-details md:w-[40%]  ">
          <div className='border-[#63636363] max-w-[400px] border shadow px-4 ' >
          <h1 className='text-2xl mb-4 ' >Price Details  <span> ({totalQuantity}  items) </span> </h1>
           {Object.values(userInfo.cart).map(e=>{
            const {name,price,size}=e;
           return Object.entries(size).map(([s,quantity])=> {
            total+=quantity*price
             return <div className='grid grid-cols-2 gap-4 mb-2' ><h1>{name}  X  {quantity} </h1>
              <p>{quantity*price} </p>
            </div>}
               )})}
           <div className="flex justify-between mb-4 items-end border-t border-[#55545484]"> <p className='' > <span className=' font-medium' >Total </span> <span className='text-xl' > {total}</span> </p>
           <p className="button cursor-pointer ">Confirm</p></div>
          </div>        
        </div> 
    </div>}

   </main>
  )
}
