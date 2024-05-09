import React from 'react'
import Container from '../Container'
import { Link, useLocation, useParams } from 'react-router-dom'
import logo from "../../assets/react.svg"

const menuData = [
  {
    title:"Home",
    link:"/",
  },
  {
    title:"Services",
    link:"/services",
  },
  {
    title:"Portfolio",
    link:"/portfolio",
  },
  {
    title:"Free Consultency",
    link:"/consultancy",
  },
  {
    title:"Contact Us",
    link:"/contacts",
  },
]

const Navbar = () => {
  const params = useLocation()
  return (
    <Container>
      <nav className='py-6 flex justify-between items-center flex-wrap'>
        <div className=''>
          <Link to={'/about'}><img src={logo}/></Link>
        </div>
        <div>
          <ul className='flex gap-x-5 flex-wrap'>
            {
              menuData.map((item,index)=>(
                <li className={item.link == params.pathname ? "text-[#0167d6]":"hover:text-[#0167d6] transition-all ease-linear"} key={index}><Link to={item.link}>{item.title}</Link></li>
              ))
            }
          </ul>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar