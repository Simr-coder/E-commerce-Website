import React, { useState } from 'react'
import SelectAvatar from './SelectAvatar'
import { useOutletContext } from 'react-router'

export default function Profile() {
  const { setChangedInfo, userInfo }=useOutletContext();
  const linkTypeColor = { instagram: 'pink', whatsapp: 'green', twitter: 'blue' }
  const [linkType, setLinkType] = useState({})
 const [display,setDisplay]=useState('hidden')

  return (
    <section className='profile'>
    {display!='hidden'?  <SelectAvatar userInfo={userInfo} setDisplay={setDisplay} setChangedInfo={setChangedInfo} />:""}
      <div className="file-container ">
        <h1 className='text-5xl font-semibold text-center mb-4 ' >Profile</h1>
        <div className="img-container md:w-[200px] w-[148px] ">
          <img src={userInfo.avatar[1]} alt="" />
          <div onClick={()=>setDisplay('show')} className="edit-button icon">
            <img src="https://th.bing.com/th/id/OIP.Q2eUERZJcJ5S_CVn1dZNXgHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          </div>
        </div>
        <form className='user-detail' action="./">
          <div className="name">
            <label htmlFor="name" className=''>UserName</label>
            <input type="text" />
          </div>
          <div className="age">
            <label htmlFor="age">Age</label>
            <input type="number" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" />
          </div>
        </form>
        <h1 className='hover-Underline'>Add Links 🔗</h1>
        <label name='link' htmlFor="link">#Link  </label>
        <select id='link' onChange={(e) => {
          let option = e.target.value
          setLinkType({ option: linkTypeColor[option] })
        }} name="link" className=''>
          <option value="whatsapp">Whatsapp</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
        </select>
        <br />
        <input className='mt-2 rounded w-[90%] max-w-[800px] p-1' type="text" />
        <button className='button block ml-auto '>Save</button>
      </div>

    </section>
  )
}
