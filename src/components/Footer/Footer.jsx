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
            <p className='mb-4'>Last Updated: <strong>16 june 2026</strong></p>
        </div>
       
        </div>
    </div>
   </section>
  )
}

export default Footer