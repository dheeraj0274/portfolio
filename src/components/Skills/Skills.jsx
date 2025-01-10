"use client";
import React from 'react'

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoElectron } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import {motion} from "framer-motion";

const skills=[
    {
        id:1,
        image:<FaHtml5 color="#eee600" size="100px" />,
        title:'HTML',
        delay:'0.3s'
    },
    {
        id:2,
        image:<FaCss3 color="#ba55d3" size="100px" />,
        
        title:'CSS',
        delay:'0.5s'


    }
    ,
    {
        id:3,
        image:<FaSquareJs color="#ff4500" size="100px" />  ,
        title:'JS',
        delay:'0.7s'


    },
    {
        id:4,
        image: <FaReact color="#00ff00" size="100px" />,
        title:'React',
         delay:'0.9s'


    },
    {
        id:5,
        image: <IoLogoElectron  size="100px" />,
        title:'Electron',
        delay:'1.1s'


    }
    , {
        id:6,
        image: <FaNodeJs size="100px"  />,
        title:'Nodejs',
        delay:'1.3s'


    },
    {
        id:7,
        image: <SiExpress color="#ffa500"  size="100px" />,
        title:'ExpressJS',
         delay:'1.5s'


    },

    {
        id:8,
        image: <DiMongodb color="#008000" size="100px"  />,
        title:'Mongodb',
         delay:'1.7s'


    },
    {
        id:9,
        image: <RiNextjsLine  size="100px" />,
        title:'Next-JS',
         delay:'1.9s'



    },
    {
        id:10,
        image: <FaPython color="#008b8b" size="100px"  />,
        title:'Python',
         delay:'2.1s'


    }
]


const Skills = () => {

   
  return (
   <section  className='bg-black text-white '>
    <div>
        <div className='container py-20 xl:py-36 space-36'>
            <div className='relative '>
                <p className=' text-3xl lg:text-4xl  tracking-widest
                text-center font-bold uppercase relative '>My Skills</p>
                <p className='  w-full text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 text-center
                uppercase font-extrabold -translate-x-1/2 -translate-y-1/2 '>{''} My Skills</p>
            </div>

            <div className=' grid grid-cols-3 lg:grid-cols-5 gap-8'>
                {
                    skills.map((skill)=>{
                        return(
                            <div
                           
                              key={skill.id}  className='flex flex-col mt-24 items-center  hover:border border-primary hover:red-shadow 
                 justify-center p-4 rounded-xl overflow-hidden cursor-pointer hover:scale-110 duration-300' >
                     <div >{skill.image}</div>
                     <div className='text-white text-2xl '> {skill.title}</div>
                    </div>
                        );
                    })
                }
                
                    
                    

                </div>
            </div>
           
        </div>
   
   </section>
  )
}

export default Skills
