import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero/Hero'
import Banner from '@/components/Banner/Banner'
import Services from '@/components/Services/Services'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import Skills from '@/components/Skills/Skills'

const page = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Banner/>
   <Services/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </>
  
  )
}

export default page