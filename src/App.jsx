import { useState } from 'react'

import './App.css'
import Header from './Header'
import { Outlet } from 'react-router'
import SearchField from './SearchField'

function App() {
  const [userInfo,setChangedInfo]=useState({
    avatar:['none','https://th.bing.com/th/id/OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'],
    cart:{},
    wishList:[]
  })

  return (
    <>
    <Header userInfo={userInfo} />
    <div className="pt-16 md:hidden">
    <SearchField />
    </div>
    {/* <HomePage/> */}
    <Outlet context={{userInfo ,setChangedInfo}} />
    {/* <Products/> */}
    {/* <Profile userInfo={userInfo} setChangedInfo={setChangedInfo} /> */}
    </>
  )
}

export default App
