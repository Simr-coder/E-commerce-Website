import { useEffect, useRef, useState } from 'react'

import './App.css'
import Header from './Header'
import { Outlet } from 'react-router'
import SearchField from './SearchField'

function App() {
  const [userInfo,setChangedInfo]=useState({
    avatar:['none','https://th.bing.com/th/id/OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
    cart:{},
    wishList:{}
  })
  const [displayNav,setDisplayNav]=useState('hidden')

useEffect(()=>{
localStorage.getItem('userInfo')?setChangedInfo(JSON.parse(localStorage.getItem('userInfo'))):localStorage.setItem('userInfo',JSON.stringify(userInfo))
},[])
let notFirstRender=useRef(false)
useEffect(()=>{
  if(notFirstRender.current)
  localStorage.setItem('userInfo',JSON.stringify(userInfo))
  notFirstRender.current=true
  },[userInfo])

return (
    <div onClick={e=>setDisplayNav('hidden')} >
    <Header displayNav={displayNav} setDisplayNav={setDisplayNav} userInfo={userInfo} />
    <div className="pt-16 md:hidden">
    <SearchField />
    </div>
    <Outlet context={{userInfo ,setChangedInfo}} />
    </div>
  )
}

export default App
