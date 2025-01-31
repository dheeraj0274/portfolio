import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import Project1 from '../../assets/game.jpeg'
import Project2 from '../../assets/radar.jpeg'
import Project3 from '../../assets/mortgage.jpeg'
import Project4 from '../../assets/namo.jpeg'
import Project5 from "../../assets/drum.jpeg"
import Project6 from "../../assets/mba.png"


const bgStyle={
       width:'300px',
       height:'250px',
      
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
};


const ProjectData = [
    {
        id:1 ,
        title: "Guess the number",
        image: Project1,
        link: "https://first-game-six.vercel.app/",
        desc:"this is the project that i have launch on github and fully functional"
    },
    {
        id:2 ,
        title: "Real time Radar",
        image: Project2,
        link: "https://my-radar-eight.vercel.app/",
         desc:"this is the project that i have launch on github and fully functional"
    },
    {
        id:3 ,
        title: "Moratgage Calculator",
        link:'',
        image: Project3,
         desc:"this is the project that i have launch on github and fully functional"
    },
    {
        id:4 ,
        title: "About-Namo",
        link: "https://dheeraj0274.github.io/-Prime-Minister/" ,
        image: Project4,
         desc:"this is the project that i have launch on github and fully functional"
    },
    {
        id:5 ,
        title: "Drum-Kit",
        image: Project5,
        link: "https://dheeraj0274.github.io/drumKIT/" ,
         desc:"this is the project that i have launch on github and fully functional"
    },
    // {
    //     id:6,
    //     title: "Food-website",
    //     image: Project6,
    //     link: "" ,
    //      desc:"this is the project that i have launch on github and fully functional"
    // }
]

const Projects = () => {
  return (
   <section id="projects" className='bg-black text-white'>
    <div className="container py-20 xl:py-36 spacey-36">
        {/* heading-title */}

        <div className='relative'>
            <p className='text-3xl  lg:text-4xl mb-20 tracking-widest
             font-bold text-center uppercase relative z-20'>Projects</p>
             <p className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
              uppercase font-extrabold'>{''} Projects</p>
        </div>

        <div className=' grid grid-cols-1 sm:grid-cols-2 ms:grid-cols-3 gap-5 '>
          {
            ProjectData.map((project)=>{
                return(
                <div key={project.id} className='bg-black hover:red-shadow border-2 border-primary/80
                p-4 rounded-xl hover:scale-110 duration-300 group space-y-5
                '>
                    <Image src={project.image} 
                            alt={project.title}
                            className="w-full"
                            style={bgStyle}
                            />
                            <div className='space-y-2 p-4'>
                                <h1>{project.title}</h1>
                                <p className='text-sm line-clamp-2'>{project.desc}</p>
                                </div>
                                <div  className='hidden group-hover:flex justify-around
                                items-center duration-300'
                                >
                                    <a href={project.link}  className='border-2 border-white 
                                    px-4 py-2 rounded-lg'>Live</a>
                                    <button className='btn '>View Code</button>
                                </div>
                     
                    </div>
                )
                
            })
          }
        </div>
    </div>
    

   </section>
  )
}

export default Projects