import React from 'react'
import { Link } from 'react-router'

export default function NavIcon({ img, name, to }) {
  return (
    <li>
      <Link to={to} >
        <img src={img} alt="" className="icon" />
        <p>{name}</p>
      </Link>
    </li>
  )
}
