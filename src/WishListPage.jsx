import React from 'react'
import { useOutletContext } from 'react-router';
import CartItems from './CartItems';
import WishListItems from './WishListItems';
import NotPresent from './NotPresent';

export default function WishListPage() {
  const { setChangedInfo, userInfo }=useOutletContext();
  let isEmpty=true
Object.values(userInfo.wishList).map(e=>{const {size}=e;
 Object.entries(size).map(()=>{
    isEmpty=false
 })})

  return (
    <main>
           <div className="items mx-auto md:w-[40%]">
    {  isEmpty? <NotPresent title='Click ♥️ to add Items' buttonText='Find items to Save' buttonUrl='/' image={'https://th.bing.com/th/id/OIP.D6uTlZvgvo3aQkC1JqU1FAHaJl?w=160&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7'}  /> 
     : Object.values(userInfo.wishList).map(e=>{
               const {name,images,price,id,size}=e;
              return Object.entries(size).map(([s,quantity])=> <WishListItems setChangedInfo={setChangedInfo} data={e} id={id} key={id} size={s} userInfo={userInfo} image={images[0]} name={name} price={price} />)
               })
               }
                       
           </div>
    </main>
  )
}
