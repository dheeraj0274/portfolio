import React, {useState} from 'react'
import { NavLinks } from './Navbar'
import Link from 'next/link'

const Responsivemenu = ({showMenu , toggleMenu}) => {
  
  
  return (
    
      <div className="md:hidden">
        <div className={`${showMenu ? "left-0" : "left-[-100%]" } fixed top-0 left-0 z-[999]
          bg-black text-white h-screen w-[75%] pt-20 pl-10   duration-300
        md:hidden rounded-r-xl shadow-md mt-10`}>
            {/* menu section */}
            <div>
                <div>
                    <ul>
                      {
                         NavLinks.map((link)=>{
                           
                           
                            return (
            
                            <li key={link.id} className="py-6">
                            <Link
                              href={link.link}
                              className="text-2xl  font-medium text-white"
                              onClick={toggleMenu}
                            >
                              {link.title}
                            </Link>
                          </li>
                            )
                            
                        })}
                    </ul>
                </div>
            </div>
            {/* menu footer section  */}
        </div>
      </div>
  )
}

export default Responsivemenu