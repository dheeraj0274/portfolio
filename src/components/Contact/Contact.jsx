"use client"
import React from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'
import emailPic from '../../assets/email.png'
import  { useRef } from 'react';


const Contact = () => {
    const form = useRef();
     const [formData , setFormData] = React.useState({
        user_name:"",
        user_email:'',
        message:"",
     });
     const handleChange =(e)=>{
        const {name , value} = e.target;
        setFormData((prevFormData)=>({
            ...prevFormData ,
            [name]: value,
        }));
    }
        const handleSubmit = (e)=>{
            e.preventDefault();

            emailjs
              .sendForm('service_s8fptta', 'template_g58o34e', form.current, {
                publicKey: '7my0GzUoqz0x3C4m-',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
              setFormData({
                user_name:'',
                user_email:'',
                message: '',
              });
        };
     
  return (
    <section id="contact" className='bg-black py-24'>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='flex justify-center items-center w-full'>
                <form ref={form} onSubmit={handleSubmit}
                className='bg-primary/45 p-8 rounded-xl w-[400px] max-w-lg'>
                <h1 className='text-white'>Get in touch</h1>
                <div className='mb-4'>
                    <label className='block text-white/30'>Name</label>
                    <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 border
                    border-gray-300 rounded-md focus:outline-none
                    focus:ring foucus:ring-opacity-50 ring-primary bg-black text-white'
                    />
                </div>
                <div className='mb-4'>
                <label className='block text-white/30'>Email</label>
                    <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-2 border
                    border-gray-300 rounded-md focus:outline-none
                    focus:ring foucus:ring-opacity-50 ring-primary bg-black text-white'
                    />
                </div>
                <div className='mb-4'>
                <label className='block text-white/30'>Message</label>
                    <textarea
                   
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className='mt-1 block w-full px-3 py-4 border
                    border-gray-300 rounded-md focus:outline-none
                    focus:ring foucus:ring-opacity-50 ring-primary bg-black text-white'
                    />
                </div>
                <button type='submit' className='btn mt-4 px-8'>Send</button>
                
               
                </form>
                </div>
                <div className='hidden md:flex  justify-center items-center'>
                    <Image
                    src={emailPic}
                    alt="send"
                    className='w-full animate-bounce duration-1000 ' />
                </div>

           

        </div>
        
    </section>
  )
}

export default Contact