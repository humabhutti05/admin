import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { BiSolidCategoryAlt } from 'react-icons/bi'
import { TbWritingSign} from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {

  const location = useLocation()

    const NavItems = [
      {
        tab : "Home",
        url : "/",
        icon : <FaHome />
      },
      {
        tab : "Categories",
        url : "/category",
        icon : <BiSolidCategoryAlt />
      },
      {
        tab : "Authors",
        url : "/author",
        icon : <TbWritingSign />
      }
    ]

  
  return (
     <>
        <div className="d-flex bg-success p-3 text-white justify-content-between align-items-center">
          <span>Admin Name</span>
          <button className='btn btn-outline-light'>logout</button>
        </div>

<ul className='nav flex-column pt-3'>
  {
    NavItems.map((val,key) =>
     <li key={key} className= { `nav-item m-2  ${location.pathname == val.url ? 'bg-white rounded' : null }` }>
   
  <Link className="nav-link d-flex align-items-center gap-2" to={val.url}>
    <span>{val.icon}</span> 
    <span>{val.tab}</span>
  </Link>
  </li>

    )
  }
</ul>


     </>
  )
}
