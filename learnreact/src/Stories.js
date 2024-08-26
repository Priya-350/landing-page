import React from 'react'
import img8 from "./assets/image.jfif"
const Stories = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <p className='text-base'>Recent Updates</p>
       <h1 className='text-3xl font-medium'>Featured Stories</h1>
       <div className='flex md:flex-row mt-5  md:space-x-5 md:space-y-0 justify-evenly mb-5 flex-col w-full md:w-fit  space-x-0 items-center space-y-3'>
        <div className='flex flex-col text-center space-y-3 bg-violet-50 pb-3 hover:shadow-2xl rounded-2xl md:w-1/3 w-3/4'>
            <img className='rounded-tl-2xl rounded-tr-2xl' src={img8} alt='company'/>
            <p className='text-indigo-500 text-lg'>Google Rankings</p>
            <p className='px-6'>Make it connect with every client worldwide</p>
            <p className='text-indigo-500 '>Read More</p>
        </div>
        <div className='flex flex-col text-center space-y-3 bg-violet-50 pb-3 hover:shadow-2xl rounded-2xl md:w-1/3 w-3/4'>
            <img className='rounded-tl-2xl rounded-tr-2xl' src={img8} alt='company'/>
            <p className='text-indigo-500 text-lg'>Communication</p>
            <p className='px-6'>Best Communication for the business</p>
            <p className='text-indigo-500 '>Read More</p>
        </div>
        <div className='flex flex-col text-center space-y-3 bg-violet-50 pb-3 hover:shadow-2xl rounded-2xl md:w-1/3 w-3/4'>
            <img className='rounded-tl-2xl rounded-tr-2xl' src={img8} alt='company'/>
            <p className='text-indigo-500 text-lg'>Remote Working</p>
            <p className='px-6'>Remote connectivity network for consistent  </p>
            <p className='text-indigo-500 '>Read More</p>
        </div>
       </div>
    </div>
  )
}

export default Stories