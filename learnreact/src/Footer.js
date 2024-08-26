import React from 'react'
import img1 from "./assets/facebook.svg"
import img2 from "./assets/twitter.svg"
import img3 from "./assets/insta.svg"
const Footer = () => {
  return (
    <div className='flex bg-violet-50 py-12 pb-14 relative flex-col items-center justify-start md:flex-row md:justify-between md:items-center'>
       <p className='md:ms-12 md:w-1/4 md:ps-12 font-bold text-xl ms-0 ps-5 pb-5 text-center '>Landing page</p> 
       <div className='flex md:flex-row justify-center md:space-x-20 md:ps-0 w-1/2 flex-col space-x-0 ps-5 items-center'>
        <div>
        <h1 className='font-bold'>Links</h1>
        <p>Products</p>
        <p>About</p>
        </div>
        <div>
        <h1 className='font-bold'>Links</h1>
        <p>Products</p>
        <p>About</p>
        </div>
        <div>
        <h1 className='font-bold'>Links</h1>
        <p>Products</p>
        <p>About</p>
        </div>
        
       </div>
       <div className='md:me-12 w-1/4 flex md:justify-end space-x-6 items-center md:pe-12  ms-5 pt-5 justify-center '>
          <img className='w-6 h-6' src={img1} />
          <img className='w-6 h-6' src={img2} />
          <img className='w-6 h-6' src={img3} />
       </div>
       <p className='absolute bottom-0 bg-violet-400 w-full text-white text-center text-xl  '>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer