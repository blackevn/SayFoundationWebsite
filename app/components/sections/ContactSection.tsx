'use client' 
import Image from "next/image"
import { easeIn, motion } from "framer-motion"
import { ContactForm } from ".."


const ContactSection = () => {
 
  return <>
          <ContactForm/>
        </>
  
}

export default ContactSection

 // return <motion.div 
  // initial={{opacity: 0, y: 30}}
  // whileInView={{
  //   opacity: 1,
  //   y: 0,
  //   transition:{
  //   duration: .5,
  //   ease: easeIn
  // }}}
  // className='grid place-items-center space-y-4 p-12'>
  //   <h1 className='text-4xl lg:text-7xl font-bold text-blue-500 text-center'>Send us a message</h1>
  //   <div className="join">
  //   <input className="input input-bordered join-item" placeholder="Email"/>
  //   <button className="btn join-item rounded-r-full">Subscribe</button>
  //   </div>
  // </motion.div>