'use client'

import { useGeneralContext } from "@/app/context/AppContext"
import { motion } from "framer-motion"

const SecondSection = () => {



 const { width } = useGeneralContext()

  return <motion.div 
            initial={{
                opacity: 0,
                y: 10
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition:{
                    duration: .4,
                    delay: .3
                }
            }}
        className="flex flex-col lg:flex-row p-8 place-items-center bg-[url('/asset.png')] bg-no-repeat bg-contain bg-left-bottom lg:gap-20 lg:bg-none">
        <div
        className='flex justify-end w-[50%]'>
            <div className='text-2xl lg:text-4xl w-full text-center lg:text-end z-[3] font-semibold relative'>
                <h1 className="font-thin">
                There is no big<br/>
                impact<br/> without <br/>
                </h1> 
                <motion.h1
        
                className='text-blue-500 font-extrabold text-4xl lg:text-7xl lg:right-0 backdrop-blur-md text-center'>
                Big
                Action
                </motion.h1> 
            </div> 
            </div>
            <div className="lg:w-[50%] grid place-items-center lg:p-40 lg:bg-[url('/asset.png')] bg-no-repeat bg-contain bg-left-bottom p-4 ">
                <p className="p-4 rounded-lg backdrop-blur-lg font-bold text-gray-600">
                We are Say Family Foundation, a team of 7 people based in Accra, Ghana. We are a non-profit organization that focus on saving civilian in the middle of war by providing basic needs like food, safe area, 
                and others aspect of basic life. we are founded in 1980 by Azmar Bakalea, a genius and businessman behind others non-profit organization as a Product Red, and Capital AID. 
                </p>
            </div>
        </motion.div>
}

export default SecondSection