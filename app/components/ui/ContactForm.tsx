'use client'

import { easeIn, motion } from "framer-motion"
import { BG, Button, Input } from ".."
import { FaArrowAltCircleRight } from "react-icons/fa"
import { usePathname } from "next/navigation"


interface ContactFormProps {
    modifier?: string
}

const ContactForm: React.FC<ContactFormProps> = ({ modifier }) => {

    const pathname: any = usePathname();
    const homePath = pathname === '/'

  return (
    <div className={`lg:flex relative ${modifier}`}>
        <div className="absolute h-[70%] w-[70%] dark:bg-blue-400 bg-green-400 opacity-5 z-[-6] rounded-full blur-3xl left-10"></div>
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
            className={`bg-[url('/Circle.png')] icons top-40 ${ homePath && 'hidden'}`}></motion.div>
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
            className={`bg-[url('/Plus.png')] icons bottom-40 right-0 ${ homePath && 'hidden'}`}></motion.div>

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
              <div className="space-y-4 lg:w-[80%] grid place-items-center">
                <div className="space-y-4 z-30">
                  <h1 className=" text-5xl lg:text-7xl font-black text-blue-600">Help us change lives!</h1>
                  <h2 className="text-2xl font-thin">If you would like any more information regarding giving Say Family Foundation, then please contact us and we will do our best to help.</h2>
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
            
              <div className="space-y-4 p-4 rounded-2xl shadow-lg z-30 bg-white dark:bg-transparent">
              <Input 
                modifier="border dark:bg-transparent" 
                placeholder="Name"   />
              <Input 
                modifier="border dark:bg-transparent"
                placeholder="E-mail"  />
                <textarea
                className="textarea w-full dark:bg-transparent"
                placeholder="Message"
                />
                <Button
                text="Send"
                modifier="btn bg-blue-600 text-white border-0"
                icon={FaArrowAltCircleRight}
                />
              </div>
            </motion.div>
          </div>
  )
}

export default ContactForm