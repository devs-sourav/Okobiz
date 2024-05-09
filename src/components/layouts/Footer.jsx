
import React from 'react'
import Container from '../Container'
import logo from "../../assets/react.svg"
import { Link, useLocation } from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import { FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';

const importLinkData = [
  {
    title:"About Us",
    link:"/about"
  },
  {
    title:"Our Team",
    link:"/team"
  },
  {
    title:"Services",
    link:"/services"
  },
  {
    title:"Help Center",
    link:"/help"
  },
]

const SocialMediaData = [
  {
    title:"Facebook",
    icon:FaFacebookF,
    link:"https://www.facebook.com/"
  },
  {
    title:"LinkedIn",
    icon:FaLinkedin,
    link:"https://www.linkedin.com/"
  },
  {
    title:"Whatsapp",
    icon:FaWhatsapp,
    link:"https://www.whatsapp.com/"
  },
  {
    title:"Twitter",
    icon:FaTwitter,
    link:"https://www.twitter.com/"
  },
]

const AnyReactComponent = ({ icon: Icon }) => <div><Icon className="text-red-800 text-3xl"/></div>;


const Footer = () => {
  const defaultProps = {
    center: {
      lat: 23.809591,
      lng:90.367447
    },
    zoom: 11
  };
  const params = useLocation()
  return (
    <footer className='bg-[#EFF6FF]'>
      <Container>
        <div className='flex flex-wrap  justify-between py-20 '>
          <div className='md:w-1/3 w-full px-4 md:px-0'>
            <div className='mb-6'>
              <img src={logo}/> 
            </div>
            <div>
              <h3 className='text-gray-500 py-1 '><span className='font-bold'>Email: </span>contact@email.com</h3>
              <h3 className='text-gray-500 py-1' ><span className='font-bold'>Phone: </span>+880 ***********</h3>
              <h3 className='text-gray-500 py-1'><span className='font-bold'>Address: </span>Mirpur, Dhaka</h3>
            </div>
            <ul className='flex flex-wrap pt-7 gap-x-4'>
              {
                SocialMediaData.map((item,index)=>{
                  let Icon=item.icon
                  return(
                    <li key={index}><a href={item.link} className='w-7 h-7 rounded-full border transition-all ease-linear hover:border-[#0167d6] hover:text-[#0167d6] border-gray-500 text-gray-500 flex justify-center items-center'><Icon className='text-sm' /></a></li>
                  )
                })
              }
            </ul>

          </div>
          <div className='md:w-[30%] w-full px-4 md:px-0'>
            <h2 className='mb-8 uppercase font-semibold text-sm text-gray-500'>Important Links</h2>
            <ul >
              {
                importLinkData.map((item,index)=>(
                  <li className={item.link == params.pathname ? "text-[#0167d6] py-2 hover:text-[#0167d6] text-[15px]":"hover:text-[#0167d6] transition-all ease-linear py-2  text-gray-500 text-[15px]"} key={index}><Link to={item.link}><h3>{item.title}</h3></Link></li>
                ))
              }
            </ul>
          </div>
          <div className='md:w-[30%] w-full '>
                <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={	23.809591}
                lng={	90.367447}
                icon={FaLocationDot}
              />
            </GoogleMapReact>
          </div>
          </div>
        </div>
      </Container>
      <div className=' bg-[#0167d6]'>
        <Container>
          <h4 className='py-6 text-center text-white '><span>&#169; </span>Copyright 2024. All Rights Reserved by Okobiz</h4>
        </Container>
      </div>
    </footer>
  )
}

export default Footer