"use client"
import React from 'react'
import Image from 'next/image'
import Wall from '../../assets/wall3.jpg' 
import {motion} from "framer-motion"
import CountUp from "react-countup"
import photo from "../../assets/hacker3.png"
import circle from "../../assets/circle4.png"

const wallBackground ={
    backgroundImage: `url(${Wall.src})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",

}
export const slideUp=(delay)=>{
    return {
        initial:{
            y:50,
            opacity:0
        },
        animate :{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay:delay,
            },
        },
    };
}

const Hero = () => {
    
        
  return (
<section style={wallBackground} className="bg-black  
text-white">
    <div className="bg-gradient-to-b from-primary/50 to-black  ">
        <div className="container grid grid-cols-1
         md:grid-cols-2 min-h-[650px]">
            <div className="flex flex-col justify-center md:text-left  py-14 md:py-0">
                <div className="text-center  md:text-left space-y-6">
            <motion.p variants={slideUp(0.3)} initial="initial" animate="animate" className="text-4xl ">Hello , I'm</motion.p>
            <motion.p variants={slideUp(0.5)} initial="initial" animate="animate" className=" text-5xl lg:text-7xl font-satisfy ">Dheeraj Yadav</motion.p>
            <motion.p variants={slideUp(0.7)} initial="initial" animate="animate"  className=' text-base leading-snug '>
               I'm a Btech student aspiring full-stack developer. I'm skilled in React and NodeJs with a passion
               for creative and user-efficent application.Currently I'm focused on my Development-Skills and
               exploring new tech. 
               
            </motion.p>
            <motion.button variants={slideUp(0.8)} initial="initial" animate="animate" className='btn '>Know More</motion.button>
           {/* stats-section */}
           <div className='flex justify-around bg-gradient-to-b from-primary/50 to-black
           border-2 border-primary/80 rounded-xl hover:red-shadow hover:scale-105 duration-300
           md:max-w-[400px] !mt-[44px] p-4'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-2xl font-bold'> <CountUp end={19} start={0} suffix='+' 
                    /></p>
                <p className='text-sm'>Age</p>
            </div>
            <div className='flex flex-col items-center gap-2'>

                <p className='text-2xl font-bold'>
                    <CountUp end={10} start={0} suffix='+' 
                    delay={1.4}
                    />
                </p>
                <p className='text-sm'>Projects</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-2xl font-bold'> <CountUp end={2} start={0} suffix='+' 
                    delay={1.4}
                    /></p>
                <p className='text-sm'>Experiance</p>
            </div>
           </div>

            </div>
        </div>

        {/* hero-section */}
        <div className='flex justify-center md:justify-end items-center relative'>
            <div className='bg-black rounded-3xl overflow-hidden h-[500px]  flex items-end relative group hover:red-shadow
            hover:scale-105 duratio-700 '>
                <Image src={circle}  alt="circle"
                className=' absolute top-4 -left-0 -z-0 animate-spin group-hover:animate-pulse duration-300'/>
                <Image  className="relative w-[400px] z-10 group-hover:grayscale group-hover:scale-98 duration-700" src={photo} alt="hero"
                />
            </div>
        </div>
        </div>
    </div>
</section>
  )
}

export default Hero