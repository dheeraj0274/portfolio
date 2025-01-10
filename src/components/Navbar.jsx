"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {MdMenu} from "react-icons/md"
import Responsivemenu from "./Responsivemenu";

export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Services",
    link: "/#services",
  },
  {
    id: 4,
    title: "Projects",
    link: "/#projects",
  },
  {
    id: 5,
    title: "Contact",
    link: "/#contact",
  }
];

const Navbar = () => {
  const pathname = usePathname();
  const[showMenu, setShowMenu] = React.useState(false);
  const  toggleMenu=()=>{
    setShowMenu(!showMenu);

  }
  return (
    <nav className="bg-black text-white  w-full fixed z-[99999] py-2">
      <div className="container flex  justify-between ">
        {/* welcome section */}
        <div className="  z-[9999]">
          <Link href="/">
            <div className="flex items-center">
              <div
                className="h-[40px] w-[40px] flex justify-center items-center bg-primary text-white
             rounded-full text-3xl font-bold"
              >
                W
              </div>
              <h1 className="text-3xl font-bold">elcome</h1>
            </div>
          </Link>
        </div>

        {/* links */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5">
            {NavLinks.map((link) => {
              const isActive = pathname === link.link;
              return (
                <li key={link.id}>
                  <Link
                   href={link.link}
                    className={`${
                      isActive
                        ? "text-primary text-xl font-bold hover:text-white"
                        : ""
                    } inline-block text-lg py-1 px-4 hover:red-shadow hover:bg-primary 
                        rounded-md hover:text-white transition-all duration-500 hover:scale-110`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* mobile section */}
        <div className="md:hidden">
            <MdMenu onClick={toggleMenu} className="text-4xl cursor-pointer"/>

        </div>

        {/* responsive side menu */}
       
      </div>
      <Responsivemenu showMenu={showMenu} toggleMenu={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
