"use client";

import React from 'react'
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin, CiTwitter, CiMail } from "react-icons/ci";
import { MdMusicNote } from "react-icons/md";
import Link from 'next/link';
;

const ContactFooter = () => {

  const openMusicPlayer = () => {
    window.dispatchEvent(new Event("openMusicPlayer"));
  };

  return (
    <div className='fixed bottom-10 md:left-5 md:top-[30%] z-[1000] w-[60%] md:w-fit'>
      <div className='p-2 rounded-2xl md:h-[60%] bg-zinc-700 border border-white/20'>
        <div className='flex md:flex-col justify-around items-center h-full'>

          <Link href='https://github.com/dheeraj0274' target='_blank' className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'>
            <VscGithubAlt size={30} color='white' />
          </Link>

          <Link href='https://www.linkedin.com/in/dheeraj-yadav-b0535b247/' target='_blank' className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'>
            <CiLinkedin size={30} color='white' />
          </Link>

          <Link href='/' target='_blank' className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'>
            <CiTwitter size={30} color='white' />
          </Link>

          <Link href='/' className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1'>
            <CiMail size={30} color="white" />
          </Link>

          
          <button
            onClick={openMusicPlayer}
            aria-label="Open music player"
            className='hover:bg-blue-400 hover:scale-125 duration-300 rounded-xl p-1 cursor-pointer bg-white'
          >
            <MdMusicNote size={30} color='red' />
          </button>

        </div>
      </div>
    </div>
  )
}

export default ContactFooter
