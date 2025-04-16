import React, { useState } from 'react'
import SearchField from './SearchField'
import NavIcon from './NavIcon'
import listIcon from './assets/image.png'

export default function Header({userInfo, setDisplayNav, displayNav}) {
  return (
    <header className='flex justify-between backdrop-blur-3xl gap-1 font-bold items-center md:text-xl fixed z-[4] max-w-[1560px] py-2 px-9 w-[100%] '>
    <div className="logo-container ">
    <img className='icon  ' src="https://th.bing.com/th/id/OIP.pItSO8q3IbV1A_y3BzPD-wHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="fancy icon logo" />
    <h1><a href="/">GlamYou</a></h1>
    </div>
      <div className="search grow md:block hidden max-w-[700px]">
    <SearchField display='hidden' />
      </div>
      
     <div  className=" navigation">
      <img onClick={(e)=>{ e.stopPropagation(); setDisplayNav('')}} src={listIcon} className='icon md:hidden ' alt="menu icon" />
     <nav>
      <ul className={`md:flex flex-col md:flex-row ul  gap-8 md:text-[#9606e3] items-center ${displayNav} `}>
        <NavIcon to={'/wishList'} name={'WishList'} img={'https://th.bing.com/th/id/OIP.F9B0fBLVndj9JE6Q2RlWuQHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7'} />
        <NavIcon to={'/yourCart'} name={' Cart'} img={"https://th.bing.com/th/id/OIP.wet2YaIN_i75E2CSN03sGwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"} />
        <NavIcon to={'/profile'} name={'Profile'} img={userInfo.avatar[1]} />
      </ul>
    </nav>
     </div>

    </header>
  )
}

