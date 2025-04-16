import React from 'react'
import Product from './Product'

export default function ProductList({data}) {
 
  return (
    <section className='flex flex-wrap p-2 md:gap-4 justify-around mx-auto max-w-[1200px]'>
    {
       data.length==0?<div className='absolute text-center mx-[25%]' >
        <img src="https://th.bing.com/th/id/OIP.JJVuWGOZsiFAl2pqqsSsNQHaDx?w=279&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
        <h1>No results matched</h1></div>:data.map((e)=>{const {name,images,price,category,rating,id}=e;
            return <Product data={e} key={id} image={images[0]} name={name} price={price} category={category} rating={rating}  />
        })
    }

  
       </section>
  )
}
