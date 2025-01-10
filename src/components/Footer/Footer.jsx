"use client"
import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'



const Footer = () => {
   
    
  
  return (
   <section className='bg-black text-white py-12'>
    <div className="container">
        <div className='  bg-gradient-to-r from-primary/50 to primary/20  text-white py-12 border-2
         border-primary rounded-2xl px-4 hover:red-shadow flex flex-col lg:flex-row gap-8 justify-around items-center duration-300'>
        <div className=' flex flex-col justify-center items-center space-y-3'>
            <h2 className='text-3xl font-bold'>Connect & Collaborate</h2>
            <p>contact dy911848@gmail.com</p>
            <p>copyright ©  2024 </p>
            <p className='mb-4'>Last Updated: <strong>17 dec 2024</strong></p>
        </div>
        <div className=' flex items-center justify-center gap-3 lg:gap-10'>
            <div className='flex flex-row md:flex-col gap-7'>
                <a 
                             href='https://www.linkedin.com/in/dheeraj-yadav-b0535b247/' className='hover:scale-150 hover:red-shadow duration-300 group space-y-5' >
                    <FaLinkedin className="text-4xl"/>
                </a>
                <a className='hover:scale-150 duration-300 hover:red-shadow group space-y-5' href='https://www.instagram.com/dy990_1/?__pwa=1' >
                    <FaInstagram className="text-4xl"/>
                </a>
                <a className='hover:scale-150 hover:red-shadow duration-300 group space-y-5' href='#' >
                    <FaTwitter className="text-4xl"/>
                </a>
            </div>
        </div>
        </div>
    </div>
   </section>
  )
}

export default Footer