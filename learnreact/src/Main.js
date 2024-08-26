import React from 'react'
import img3 from "./assets/img1.svg"
import img4 from "./assets/img3.svg"
import img5 from "./assets/img4.svg"
const Main = () => {
  return (
    <div className='flex flex-col space-x-0 justify-evenly items-center mr-12 ml-12 md:flex-row md:mt-10 md: md:ml-12 md:mr-12 md:space-x-12 '>
        <div className='w-full mx-auto flex flex-col items-center space-y-3  md:flex-col md:justify-center md:w-1/3 '>
         <h1 className='font-bold text-3xl mt-5 md:mt-0 text-center'>Web Development</h1>
         <img className='w-45 h-40' src={img3} alt='web'/>
         <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum necessitatibus Lorem ipsum dolor.
        </p>

        </div>
        <div className='w-full flex flex-col items-center space-y-3 md:flex-col justify-center md:w-1/3 '>
         <h1 className='font-bold text-3xl text-center mt-5 md:mt-0'>Mobile App  Development</h1>
         <img  className='w-45 h-40' src={img4} alt='mobile' />
         <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum necessitatibus Lorem ipsum dolor.
        </p>

        </div>
        <div  className='w-full flex flex-col items-center space-y-3  md:flex-col justify-center  md:w-1/3'>
         <h1 className='font-bold text-3xl text-center mt-5 md:mt-0'  >Design</h1>
         <img className='w-45 h-40'  src={img5} alt='design'/>
         <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum necessitatibus Lorem ipsum dolor.
        </p>

        </div>
        
    </div>
  )
}

export default Main