import React from 'react'

export default function SelectAvatar({setChangedInfo,setDisplay,userInfo}) {
    const avatar={eagle:'https://th.bing.com/th/id/OIP.38Z-n89P_zwM1Acj0q-kwQHaE7?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        crow:'https://th.bing.com/th/id/OIP.sMiucSapYxm9X5BX0LhIMAHaEK?w=320&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        tiger:'https://th.bing.com/th/id/OIP.b7MI8EuWUJWOBvpvckB2vQHaE6?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        panda:'https://th.bing.com/th/id/OIP.NZA9-GdrSVgarruiuyw48gHaFj?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        dog:'https://th.bing.com/th/id/OIP.jrgps1MlXofmZjPkFkYOAgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3',
        donkey:'https://th.bing.com/th/id/OIP.ybrrqgD8ssKS2z30hLvJSQHaJ8?w=208&h=280&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        none:'https://th.bing.com/th/id/OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz?w=155&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      }
     function close(){ setDisplay('hidden')}
  return (
    <div className='avatar-container'>
        <h1 className='text-2xl mb-4 ' >Select Your Avatar</h1>
<div onClick={close} className="icon top-3 right-3">
<img className src="https://th.bing.com/th/id/OIP.DM4P-P6RuwrIEFOM7dTGbQAAAA?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="cross icon" />
</div>
        <div className="avatars flex gap-11 flex-wrap">
            {Object.entries(avatar).map(([name,image])=>{
                if(name!='none')
                return  <div onClick={()=>{ setChangedInfo(p=>( {...p,avatar:[name,image]} ) )}} className={`img-container onHover hover:border-pink-400 cursor-pointer ${userInfo.avatar[0]==name?'limelight':''}`}>
                <img onClick={close} src={image} alt={name}/>
               </div>
            })}
     <div className='gap-4  justify-end w-full flex '> 
        <button onClick={()=>{close();setChangedInfo(p=>({...p,avatar:['none',avatar.none]}))}}  className='button' >Delete  </button>
     <button onClick={close} className='button'>Close</button></div>
        </div>
    </div>
  )
}
