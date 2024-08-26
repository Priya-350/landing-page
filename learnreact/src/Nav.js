import React from 'react'
import "./Nav.css"
import img1 from "./assets/img.jfif"
import img2 from "./assets/menu.svg"
const Nav= ({show,setShow}) => {

  const handleMenu=()=>{
     setShow(!show);
  }
  return (
    <div>
    <div className='hidden ml-12 mr-12 bg-green-200 md:flex items-center justify-between rounded-tl-3xl rounded-bl-3xl rounded-tr-xl rounded-br-xl pr-2 mt-5 relative'>
         <img className='w-12 h-12 rounded-full border-2 border-green-600' src={img1} /> 
          <div className='flex flex-row items-center list-none space-x-6 '>
            <li className='hover:text-blue-500 cursor-pointer'>Services</li>
            <li className='hover:text-blue-500 cursor-pointer' >Pricing</li>
            <li className='hover:text-blue-500 cursor-pointer'>About</li>
            <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
          </div>
          <button className='bg-green-500 text-white font-bold px-5 py-1  rounded-full '>SignUp</button>

    </div>
    <div>
    <div className='md:hidden ml-12 mr-12 bg-green-200 flex items-center justify-between rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl pr-2 mt-5 relative '>
    <img className='w-12 h-12 rounded-full border-2 border-green-600' src={img1} /> 
    <img className='w-6 h-6 mr-2' src={img2} onClick={handleMenu}/>
    <div className={`hidden  flex-col absolute transform translate-y-20 mt-5  justify-center translate-x-20 list-none items-center ${show?"showNav":""}`}>
           <li className='hover:text-blue-500 cursor-pointer'>Services</li>
            <li className='hover:text-blue-500 cursor-pointer' >Pricing</li>
            <li className='hover:text-blue-500 cursor-pointer'>About</li>
            <li className='hover:text-blue-500 cursor-pointer'>Contact</li>
            <button className='bg-green-500 text-white font-bold px-5 py-1  rounded-full '>SignUp</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Nav;