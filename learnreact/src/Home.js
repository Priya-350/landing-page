import React from 'react'
import img2 from "./assets/img2.svg"
const Home = ({show}) => {
  return (
    <div className='flex flex-col md:mt-10 mt-5 justify-center md:flex-row   '>
        <div className={`md:w-1/2 px-12 flex flex-col justify-center space-y-3 ${show?"showNav" :""} `}>
            <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda neque nobis omnis possimus dolorum sint adipisci </p>
            <button className='bg-indigo-400 w-fit mx-auto px-6 py-2 rounded-full'>Get Started</button>
        </div>
        <img className=' mx-auto ms-12 mr-12 mt-5 md:w-1/2 pr-12  ' src={img2} />
    </div>
  )
}

export default Home