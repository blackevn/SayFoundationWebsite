'use client'

import { easeIn, motion } from "framer-motion"
import { BG, Button, Input } from "../components"
import { FaArrowAltCircleRight } from "react-icons/fa"


const Contact = () => {
  return  <div className="pt-20 lg:h-screen lg:w-screen lg:flex relative">
            <motion.div 
              initial={{
      opacity: 0,
      rotateY: 50
    }}
    whileInView={{
      opacity: 1,
      transition: { duration: 1, ease: easeIn },
      rotateY: 0
    }}
            className="bg-[url('/Circle.png')] icons top-40" ></motion.div>
            <motion.div 
         initial={{
          opacity: 0,
          rotateY: -50
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1, ease: easeIn },
          rotateY: 0
        }}
            className="bg-[url('/Plus.png')] icons bottom-40 right-0" ></motion.div>

            <motion.div 
               initial={{
                x:-50, 
                opacity: 0
              }}
              whileInView={{
                transition:{duration: .7},
                x:0, 
                opacity: 1
              }}
          
            className="lg:w-1/2 h-full grid place-items-center p-10">
              <div className="space-y-4 lg:w-1/2 grid place-items-center">
                <div className="space-y-4">
                  <h1 className=" text-5xl lg:text-7xl font-black text-blue-600">Help us change lives!</h1>
                  <h2 className="text-2xl font-thin">If you would like any more information regarding giving What We Can, then please contact us and we will do our best to help.</h2>
                </div>
              </div>
            </motion.div>

         {/* Contact Form */}
            
            <motion.div 
               initial={{
                y:-50, 
                opacity: 0
              }}
              whileInView={{
                transition:{duration: .7},
                y:0, 
                opacity: 1
              }}
          
            className="lg:w-1/2 lg:h-full grid place-items-center p-4 relative">
              <div className="absolute h-[70%] w-[70%] bg-green-400 opacity-5 z-[-6] rounded-full blur-3xl left-10"></div>
              <div className="space-y-4 p-4 rounded-lg shadow-lg z-30 bg-white">
              <Input 
                modifier="border" 
                placeholder="Name"   />
              <Input 
                placeholder="E-mail"  />
                <textarea
                className="textarea w-full"
                placeholder="Message"
                />
                <Button
                text="Send"
                modifier="btn bg-blue-600 text-white"
                icon={FaArrowAltCircleRight}
                />
              </div>
            </motion.div>
          </div>
          
  
}

export default Contact