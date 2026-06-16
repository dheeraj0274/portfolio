import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
          import { CiTwitter } from "react-icons/ci";
        import { CiMail } from "react-icons/ci";
import Link from 'next/link';


const ContactFooter = () => {
  return (
    <div className='fixed  bottom-10 md:left-5 md:top-[30%]  z-[1000] w-[60%] md:w-fit  '>
       <div className='p-2 rounded-2xl md:h-[60%] bg-white/10 backdrop-blur-lg border border-white/20   '>
        <div className='flex md:flex-col justify-around h-full'>
            <Link href='https://github.com/dheeraj0274' target='_blank' className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'> <VscGithubAlt size={30} color='white' /></Link>
            
              <Link href='https://www.linkedin.com/in/dheeraj-yadav-b0535b247/' target='_blank' className='hover:bg-blue-400 hover:scale-125 duration-300  rounded-xl p-1'> <CiLinkedin size={30} color='white' /></Link>
                <Link href='/' target='_blank' className=' hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'><CiTwitter size={30} color='white' /></Link>
            
           <Link href='/' className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'>     <CiMail size={30} color="white"/></Link>
          
     

        </div>
         
       </div>
        
        
        </div>
  )
}

export default ContactFooter