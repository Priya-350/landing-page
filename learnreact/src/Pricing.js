import React from 'react'
import img6 from "./assets/tick.svg" 
import img7 from "./assets/minus.svg" 
const Pricing = () => {
  return (
    <div className='text-center mt-10 mb-10'>
        <h1 className='text-green-500 font-bold text-3xl'>Pricing</h1>
        <p className='font-medium md:text-2xl text-xl'>Offers multiple packages for Monthly and Yearly Subscriptions </p>
        <p className='font-medium md:text-2xl text-xl'>Featured Plans are here..</p>
        <div className='flex md:flex-row md:justify-evenly md:space-x-4 mx-auto flex-col justify-center items-center'>

        <div className='bg-violet-50 px-6 py-2 rounded-2xl flex flex-col space-y-3 pb-6 mt-10 ml-5 relative hover:shadow-2xl '  >
            <p className='font-bold text-4xl '>$99</p>
            <p className='text-green-500 font-medium'>Basic</p>
            <p className='font-medium'>All the basic features are included</p>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img7}  />
               <p>Dual Infrastructure</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img7}  />
               <p className='mb-4'>Customized Features</p>
            </div>
            <button className='bg-indigo-400 w-fit mx-auto  px-6 py-2 rounded-full  text-white absolute bottom-0 transform translate-y-4 translate-x-12 '>Get Started</button>
        </div>
        <div className='bg-violet-50 px-6 py-2 rounded-2xl flex flex-col space-y-2 pb-6 md:mt-5 relative border-2 border-indigo-500 border-dashed hover:shadow-2xl mt-10 justify-center '  >
            <p className='font-bold text-4xl '>$199</p>
            <p className='text-green-500 font-medium'>Advanced</p>
            <p className='font-medium'> professional features are included</p>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Dual Infrastructure</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img7}  />
               <p className='mb-4'>Customized Features</p>
            </div>
            <button className='bg-indigo-400 w-fit mx-auto  px-6 py-2 rounded-full  text-white absolute bottom-0 transform translate-y-4 translate-x-12 '>Get Started</button>
        </div>
        <div className='bg-violet-50 px-6 py-2 rounded-2xl flex flex-col space-y-2 pb-6 mr-5 mt-10 relative hover:shadow-2xl '  >
            <p className='font-bold text-4xl '>$299</p>
            <p className='text-green-500 font-medium'>Business</p>
            <p className='font-medium'>For multiple business people</p>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Core Business System</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p>Dual Infrastructure</p>
            </div>
            <div className='flex '>
               <img className='w-6 h-6' src={img6}  />
               <p className='mb-4'>Customized Features</p>
            </div>
            <button className='bg-indigo-400 w-fit mx-auto  px-6 py-2 rounded-full  text-white absolute bottom-0 transform translate-y-4 translate-x-12 '>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Pricing