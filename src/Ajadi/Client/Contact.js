import React, { useEffect } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import {IoLogoWhatsapp} from "react-icons/io"
import {BsFillTelephoneFill} from "react-icons/bs"

import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {

  
  useEffect(()=> {
    AOS.init({duration:2000})

},[])


  return (
    <div className='bg-[#f5f5f5] text-[#1a456e]'>
      <div className='p-4 text-center bg-white flex mt-2  items-center justify-center  h-[100px] rounded-b-full shadow-xl shadow-indigo-800/50'></div>
    
    
       <div className=' flex justify-center font-josefins items-center w-full min-h-[500px]' data-aos="zoom-in">

         <div className=' rounded-lg w-[350px] sm:w-[450px]  h-fit py-6  shadow-indigo-800/50 shadow-xl '>
        <div className='flex justify-center items-center font-bold '>
          <h1>Contact us</h1>
        </div>
        <h1 className=' text-center text-xs px-2 pt-4'>Cick on any of the following link below to contact us for more information.</h1>
      <div className='pt-[10px] '>
        <a href='https://wa.me/+2347064989803'>
        <div className='flex items-center px-4 pt-2  gap-x-2'>
          <h1 className='text-[#128c7e] text-xl'><IoLogoWhatsapp/></h1>
          <h1>Whatsapp - Amir</h1>
        </div>
        </a>

        <a href="mailto:nasirudeenidris@gmail.com">
        <div className='flex items-center px-4 pt-2 gap-x-2'>
          <h1 className='text-[#c71610] text-xl'><AiOutlineMail/></h1>
          <h1>nasirudeenidris@gmail.com</h1>
        </div>
       </a>

       <a href="mailto:abdulrasaqkamil@gmail.com">
        <div className='flex items-center px-4 pt-2 gap-x-2'>
          <h1 className='text-[#c71610] text-xl'><AiOutlineMail/></h1>
          <h1>abdulrasaqkamil@gmail.com</h1>
        </div>
       </a>

       <a href='tel:+2347064989803'>
        <div className='flex items-center px-4 pt-2 pb-2 gap-x-2'>
          <h1 className='text-[#0ebe2c] text-xl'><BsFillTelephoneFill/></h1>
          <h1>Telephone Number (Amir): 07064989803</h1>
        </div>
       </a>

       

      

      </div>
      
      </div>
    
    
       </div>



       <div className='p-4 text-center bg-white flex  items-center justify-center shadow-indigo-500/50 h-[100px] rounded-t-full shadow-xl'></div>
      
  </div>
  )
}

export default Contact