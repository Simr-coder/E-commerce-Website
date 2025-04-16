import React from 'react'
import Carusel from './Carusel'
import Categorys from './Categorys'
import data from './assets/productsData.json'

export default function HomePage() {

  const categoryObj={}
  data.map(each=>{
    categoryObj[each.category]  = categoryObj[each.category]? [...categoryObj[each.category],each]: [each]
  })
  return (
    <main>
        <Carusel other={categoryObj.Other} />
        <Categorys categoryObj={categoryObj} />
    </main>
  )
}
