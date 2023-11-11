'use client'

import { motion } from "framer-motion"

const SecondSection = () => {
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
        className="flex flex-col lg:flex-row p-8 place-items-center bg-[url('/asset.png')] bg-no-repeat bg-contain bg-left-bottom gap-20 lg:bg-none">
        <motion.div
    
        className='flex justify-end w-[50%]'>
            <h1 className='text-5xl lg:text-7xl w-full text-center lg:text-end z-[3] font-semibold'>
                There is no big<br/>
                impact<br/> without <br/>
                    <span className='text-blue-500 font-extrabold'>
                Big
                Action
                </span> 
            </h1> 
            </motion.div>
            <div className="w-[50%] grid place-items-center lg:p-40 lg:bg-[url('/asset.png')] bg-no-repeat bg-contain bg-left-bottom">
                <p>
                We are Say Family Foundation, a team of 7 people based on Accra, Ghana. We are a non-profit organization that focus on saving civilian in the middle of war by providing basic needs like food, safe area, 
                and others aspect of basic life. we are founded in 1980 by Azmar Bakalea, a genius and businessman behind others non-profit organization as a Product Red, and Capital AID. 
                </p>
            </div>
        </motion.div>
}

export default SecondSection