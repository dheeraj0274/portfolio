"use client"
import React from 'react'
import full from '../../assets/full-stack.jpg'
import stack from '../../assets/stack.jpg'

import Image from 'next/image'
import {motion} from 'framer-motion'
import {FiDownload} from 'react-icons/fi'



const stackBackground ={
    backgroundImage: `url(${stack.src})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",

}

const Banner = () => {
  return (
   <section id="about" className='bg-black text-white'>
    <div className="container h-auto pb-10">
        <div style={stackBackground} className='bg-gray-950 rounded-3xl py-14 px-5 grid grid-cols-1
         md:grid-cols-2 space-y-2 md:space-y-0 translate-y-36'>
            {/* Banner Image */}
            <div className='flex items-end justify-center'>
                <Image  src={full}
                    alt="banner"
                    className="w-[300px] lg:w-[400px]"/>
           
            </div>


            {/* Banner Info */}
            <div className="flex justify-center items-center" >
                <div  className='text-left space-y-7 lg:maxw-[400px]'>
                    <h1 className='text-3xl lg:text-4xl text-center'>I am a Full stack Developer</h1>
                    <p className='text-white/70'>The journey was full of joy and frustation. The starting was very confusing , messed up with a comma but as time elapsed things got easier.
                     Throughout this adventurous trip I learn only one thing and that is consistency.
                    
                     </p>
                <div className='flex items-center gap-8'>
                <button className='btn text-xs py-3'>Know More
                    
                </button>
                <button className=' border border-white/50 rounded-lg px-4 text-xs flex  items-center gap-2
                                    md:text-base py-3'>
                    <FiDownload/>
                    Download
                </button>
                </div>

            </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Banner