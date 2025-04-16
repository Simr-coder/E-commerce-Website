import React from 'react'

import Category from './Category'



export default function Categorys({categoryObj}) {

  return (
  <section className='grid gap-12  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 categorys'>
    {
      Object.entries(categoryObj).map(([category,productsArr])=>{
        if(category!='Other')
        return <Category category={category} productsArr={productsArr} />
      })
    }
  </section>
  )
}

/*
Backpack:57
Belt:52
Bra:123
Bracelet:12
Cap:14
Capris:7
Deodorant:26
Dress:70
Earrings:85
Eyewear:44
Face Product:11
Handbag:145
Kajal:6
Kidswear:20
Kurta:140
Lakme Product:93
Lipstick:70
Lotus Product:80
Necklace:41
Nightdress:59
Other:1545
Perfume:55
Ponds Product:4
Pyjamas:30
Ring:34
Sandals:5
Sari:140
Shirt:214
Shoes:22
Shorts:19
Slippers:44
Ties:41
Top:65
Tunic:25
Underwear:138
Wallet:69
Watch:395

*/
