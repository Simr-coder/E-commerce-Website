import React from 'react'

export default function BannerText({innerText,bg,h1,right}) {
  return (
    <div className={`banner-text flex  items-center top-0 bottom-0  ${bg} ${right} `}>
        <div className="ml-10 mr-10">
            <h1>{h1}</h1>
            {innerText}
        </div>
    </div>
  )
}
