"use client";
import React from "react";
import serviceBg from "../../assets/service.jpg";
import { CiPen } from "react-icons/ci";
import { IoFolderOpen } from "react-icons/io5";
import { RiComputerFill } from "react-icons/ri";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${serviceBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const ServicesData = [
  {
    id: 1,
    icon: <CiPen className="text-3xl" />,
    title: "Website Development",
    icon: <RiComputerFill />,
    link: "/services",
    desc: "I am passionate about delivering high quality websites",
    delay: 1.2,
  },
  {
    id: 2,
    icon: <IoFolderOpen className="text-3xl" />,
    title: "Video Editing",
    icon: <RiComputerFill />,
    link: "/services",
    desc: "Proficeient in using  industry-standard to deliver polished  and engaging videos",
    delay: 1.2,
  },
  {
    id: 3,
    icon: <FiDownload />,
    title: "App Development",
    icon: <RiComputerFill />,
    link: "/services",
    desc: "As a beginner in app development, I am exploring the fundamentals of creating functional and user-centric mobile applications."

,
    delay: 1.2,
  },
];

const Services = () => {
  return (
    <section id="services" style={bgStyle}>
      <div
        className="bg-gradient-to-b from-black to-primary/5
            text-white pt-40"
      >
        <div className="container py-40">
          <div
            className="grid grid-cols-1 lg:grid-cols-2
                    gap-12"
          >
            {/* services-info */}
            <div className="flex justify-center items-center">
              <div className="text-left space-y-7 lg:maxw-[400px]">
                <h1 className="text-3xl lg:text-4xl">Services</h1>
                <p className="text-white/70">
                  "I offer professional web development services, specializing
                  in creating responsive, user-friendly websites tailored to
                  your needs. I ensure every project
                  aligns with your goals. Additionally, I provide  video
                  editing services, engaging content
                  for marketing, branding, or storytelling. Whether you need a
                  modern website, captivating video content, or both, I bring
                  creativity and technical expertise to every project."
                </p>
                <div className="flex items-center gap-8">
                  <button className=" bg-white text-black rounded-xl px-4 text-xs py-3">
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* services-card */}

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ServicesData.map((services) => {
                  return (
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      delay="0.8s"
                      key={services.id}
                      className="flex flex-col justify-center items-start  p-6 bg-white/20  rounded-2xl"
                    >
                      <div className="text-primary/80 bg-white/70 rounded-full p-2">
                        {services.icon}
                      </div>
                      <h1 className="text-2xl font-bold ">{services.title}</h1>
                      <p className="text-sm text-white/70 ">{services.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
